import * as Yup from 'yup';

import { Deliveryman, Delivery } from '../models';

class DeliveryEndController {
  async update(req, res) {
    const { id, delivery_id } = req.params;

    const recipient = await Deliveryman.findByPk(id);

    if (!recipient)
      return res.status(400).json({ error: 'Deliveryman not found' });

    const delivery = await Delivery.findOne({
      where: {
        id: delivery_id,
        deliveryman_id: id,
      },
    });

    if (!delivery) return res.status(400).json({ error: 'Delivery not found' });

    const schema = Yup.object().shape({
      signature_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fields' });

    const { signature_id = null } = req.body;

    const deliveryUpdated = await delivery.update(
      {
        canceled_at: new Date(),
        signature_id,
      },
      {
        new: true,
      }
    );

    return res.json(deliveryUpdated);
  }
}

export default new DeliveryEndController();
