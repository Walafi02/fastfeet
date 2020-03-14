import * as Yup from 'yup';
import { Op } from 'sequelize';
import { Delivery, Recipient, Deliveryman, File } from '../models';

class DeliverymanDeliveriesController {
  async index(req, res) {
    const { id, status = null } = req.params;
    const { page = 1, paginate = 10 } = req.query;

    const recipient = await Deliveryman.findByPk(id);

    if (!recipient)
      return res.status(400).json({ error: 'Deliveryman not found' });

    let where = {
      deliveryman_id: id,
      canceled_at: null,
    };

    if (status === 'done') {
      where = {
        ...where,
        start_date: {
          [Op.ne]: null,
        },
        end_date: {
          [Op.ne]: null,
        },
      };
    }

    if (status === 'progress') {
      where = {
        ...where,
        start_date: {
          [Op.ne]: null,
        },
        end_date: null,
      };
    }

    const deliverys = await Delivery.paginate({
      where,
      attributes: [
        'id',
        'product',
        'status',
        'created_at',
        'start_date',
        'end_date',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name', 'city'],
        },
      ],
      page,
      paginate,
      order: [['updated_at', 'DESC']],
    });

    return res.json(deliverys);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.body;

    const deliveryman = await Deliveryman.findByPk(id, {
      attributes: ['id', 'name', 'email', 'created_at'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['url'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not found' });
    }

    return res.json(deliveryman);
  }
}

export default new DeliverymanDeliveriesController();
