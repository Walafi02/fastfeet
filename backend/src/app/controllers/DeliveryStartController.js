import { startOfDay, endOfDay, setHours, isAfter, isBefore } from 'date-fns';
import { Op } from 'sequelize';

import { Deliveryman, Delivery } from '../models';

class DeliveryStartController {
  async update(req, res) {
    const { id, delivery_id } = req.params;

    const recipient = await Deliveryman.findByPk(id);

    if (!recipient)
      return res.status(400).json({ error: 'Deliveryman not found' });

    const delivery = await Delivery.findOne({
      where: {
        id: delivery_id,
        deliveryman_id: id,
        canceled_at: null,
      },
    });

    if (!delivery) return res.status(400).json({ error: 'Delivery not found' });

    const date = new Date();

    const start_date = setHours(startOfDay(date), 8);
    const end_date = setHours(startOfDay(date), 18);

    if (!(isBefore(start_date, date) && isAfter(end_date, date)))
      return res.status(400).json({ error: 'Out of hours allowed' });

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        canceled_at: null,
        start_date: {
          [Op.between]: [startOfDay(date), endOfDay(date)],
        },
      },
    });

    if (deliveries.length > 5)
      return res
        .status(400)
        .json({ error: 'No more than 5 daily deliveries are allowed' });

    const deliveryUpdated = await delivery.update(
      { start_date: new Date() },
      {
        new: true,
      }
    );

    return res.json(deliveryUpdated);
  }
}

export default new DeliveryStartController();
