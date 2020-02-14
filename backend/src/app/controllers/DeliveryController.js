import * as Yup from 'yup';
import Queue from '../../lib/Queue';
import { DeliveryAlert } from '../../jobs';

import { Delivery, Recipient, Deliveryman, File } from '../models';

class DeliveryController {
  async index(req, res) {
    const { page = 1, paginate = 10 } = req.query;

    const deliverys = await Delivery.paginate({
      attributes: ['id', 'product'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name'],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
      page,
      paginate,
    });

    return res.json(deliverys);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fields' });

    const { product, recipient_id, deliveryman_id } = req.body;

    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient)
      return res.status(400).json({ error: 'Recipient not found.' });

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman not found.' });

    const { id } = await Delivery.create({
      product,
      recipient_id,
      deliveryman_id,
    });

    await Queue.add(DeliveryAlert.key, { product, deliveryman, recipient });

    return res.json({ id, product, recipient_id, deliveryman_id });
  }

  async show(req, res) {
    const { id } = req.params;

    const deliverys = await Delivery.findByPk(id, {
      attributes: ['id', 'product'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name'],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!deliverys) return res.status(400).json({ error: 'ID not found' });

    return res.json(deliverys);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fields' });

    const { id } = req.params;

    const delivery = await Delivery.findByPk(id);

    if (!delivery) return res.status(400).json({ error: 'delivery not found' });

    const { product, recipient_id, deliveryman_id } = req.body;

    const deliveryUpdated = await delivery.update(
      { product, recipient_id, deliveryman_id },
      {
        new: true,
      }
    );

    return res.json(deliveryUpdated);
  }

  async delete(req, res) {
    const { id } = req.params;

    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exist' });
    }

    await delivery.destroy();

    return res.json();
  }
}

export default new DeliveryController();
