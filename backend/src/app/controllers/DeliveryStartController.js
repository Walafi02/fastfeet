import { startOfDay, setHours, isAfter, isBefore } from 'date-fns';
import { Deliveryman } from '../models';

class DeliveryStartController {
  async update(req, res) {
    const { id } = req.params;

    const recipient = await Deliveryman.findByPk(id);

    if (!recipient)
      return res.status(400).json({ error: 'Deliveryman not found' });

    const date = new Date();

    const start_date = setHours(startOfDay(date), 22);
    const end_date = setHours(startOfDay(date), 23);

    if (isAfter(start_date, date) && isBefore(end_date, date)) {
      console.log('ok');
    }

    console.log({ date, start_date, end_date });

    return res.json();
  }
}

export default new DeliveryStartController();
