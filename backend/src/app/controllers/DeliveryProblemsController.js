import * as Yup from 'yup';
import { Delivery, Deliveryman, DeliveryProblems, Recipient } from '../models';

import Queue from '../../lib/Queue';
import { DeliveryAlertCanceled } from '../../jobs';

class DeliveryProblemsController {
  async index(req, res) {
    const { id } = req.params;

    const deliveryProblems = await DeliveryProblems.paginate({
      include: [
        {
          model: Delivery,
          as: 'delivery',
          required: true,
          where: { recipient_id: id },
        },
      ],
    });

    return res.json(deliveryProblems);
  }

  async store(req, res) {
    const { id, delivery_id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman not found' });

    const delivery = await Delivery.findOne({
      where: {
        id: delivery_id,
        deliveryman_id: id,
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

  async delete(req, res) {
    const { id, problems_id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient)
      return res.status(400).json({ error: 'Recipient not found' });

    const deliveryProblems = await DeliveryProblems.findOne({
      where: {
        id: problems_id,
      },
      include: [
        {
          model: Delivery,
          as: 'delivery',
          required: true,
          where: { recipient_id: id },
        },
      ],
    });

    if (!deliveryProblems)
      return res.status(400).json({ error: 'Delivery Problems not found' });

    const { delivery } = deliveryProblems;

    const deliveryman = await Deliveryman.findByPk(delivery.deliveryman_id);

    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman not found' });

    // deliveryProblems.destroy();

    // await Queue.add(DeliveryAlertCanceled.key, {
    //   product: delivery.product,
    //   deliveryman,
    // });

    return res.json();
  }
}

export default new DeliveryProblemsController();
