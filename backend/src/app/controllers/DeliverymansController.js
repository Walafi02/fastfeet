import * as Yup from 'yup';

import { Deliverymans, File } from '../models';

class DeliverymansController {
  async index(req, res) {
    const { page = 1, paginate = 10 } = req.query;

    const deliverymans = await Deliverymans.paginate({
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
      page,
      paginate,
      // order: [['createdAt', 'DESC']],
    });

    return res.json(deliverymans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fields' });

    const { email } = req.body;
    const deliverymansExist = await Deliverymans.findOne({
      where: {
        email,
      },
    });

    if (deliverymansExist) {
      return res.status(400).json({ error: 'Deliveryman already exists.' });
    }

    const { id, name, avatar_id } = await Deliverymans.create(req.body);

    return res.json({ id, name, email, avatar_id });
  }

  async show(req, res) {
    const { id } = req.params;

    const deliveryman = await Deliverymans.findByPk(id, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!deliveryman) return res.status(400).json({ error: 'ID not found' });

    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fields' });

    const { id } = req.params;

    const deliveryman = await Deliverymans.findByPk(id);

    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman not found' });

    const { name, email, avatar_id } = await deliveryman.update(req.body, {
      new: true,
    });

    return res.json({ name, email, avatar_id });
  }

  async delete(req, res) {
    const { id } = req.params;

    const deliveryman = await Deliverymans.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exist' });
    }

    await deliveryman.destroy();

    return res.json();
  }
}

export default new DeliverymansController();
