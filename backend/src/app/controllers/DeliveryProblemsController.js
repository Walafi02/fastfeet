import * as Yup from 'yup';
import { Delivery, Deliveryman, DeliveryProblems, Recipient } from '../models';

import Queue from '../../lib/Queue';
import { DeliveryAlertCanceled } from '../../jobs';

class DeliveryProblemsController {
  async index(req, res) {
    const { page = 1, paginate = 10 } = req.query;

    const deliveryProblems = await DeliveryProblems.paginate({
      attributes: ['id', 'description'],
      page,
      paginate,
    });

    return res.json(deliveryProblems);
  }

  async store(req, res) {
    const { deliveryman_id, delivery_id } = req.params;

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman not found' });

    const delivery = await Delivery.findOne({
      where: {
        id: delivery_id,
        deliveryman_id,
      },
    });

    if (!delivery) return res.status(400).json({ error: 'Delivery not found' });

    const schema = Yup.object().shape({
      description: Yup.string()
        .required()
        .max(255),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fields' });

    const { description } = req.body;

    const deliveryProblems = await DeliveryProblems.create({
      delivery_id,
      description,
    });

    return res.json(deliveryProblems);
  }

  async show(req, res) {
    const { id } = req.params;

    const deliveryProblems = await DeliveryProblems.paginate({
      where: {
        delivery_id: id,
      },
      attributes: ['id', 'description'],
    });

    return res.json(deliveryProblems);
  }

  async update(req, res) {
    const { problems_id } = req.params;

    const deliveryProblems = await DeliveryProblems.findOne({
      where: {
        id: problems_id,
      },
    });

    if (!deliveryProblems)
      return res.status(400).json({ error: 'Delivery Problems not found' });

    const { delivery_id } = deliveryProblems;

    const delivery = await Delivery.findByPk(delivery_id);

    if (!delivery) return res.status(400).json({ error: 'Delivery not found' });

    const deliveryUpdated = await delivery.update(
      {
        canceled_at: new Date(),
      },
      {
        new: true,
      }
    );

    return res.json(deliveryUpdated);
  }
}

export default new DeliveryProblemsController();
