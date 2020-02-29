import { Op } from 'sequelize';
import { Delivery, Recipient, Deliveryman } from '../models';

class DeliverymanDeliveriesController {
  async index(req, res) {
    const { id, status = 'done' } = req.params;
    const { page = 1, paginate = 10 } = req.query;

    const recipient = await Deliveryman.findByPk(id);

    if (!recipient)
      return res.status(400).json({ error: 'Deliveryman not found' });

    const deliverys = await Delivery.paginate({
      where: {
        deliveryman_id: id,
        end_date:
          status === 'done'
            ? {
                [Op.ne]: null,
              }
            : null,
        canceled_at: null,
      },
      attributes: ['id', 'product', 'start_date', 'end_date'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name'],
        },
      ],
      page,
      paginate,
      order: [['updated_at', 'DESC']],
    });

    return res.json(deliverys);
  }
}

export default new DeliverymanDeliveriesController();
