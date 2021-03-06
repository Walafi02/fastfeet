import { Op } from 'sequelize';
import * as Yup from 'yup';
import Queue from '../../lib/Queue';
import { DeliveryManCreated } from '../../jobs';

import { Deliveryman, File } from '../models';

class DeliverymanController {
  async index(req, res) {
    const { name = '', page = 1, paginate = 10 } = req.query;

    const deliverymans = await Deliveryman.paginate({
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      page,
      paginate,
      order: [
        ['createdAt', 'DESC'],
        ['id', 'ASC'],
      ],
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
    const deliverymansExist = await Deliveryman.findOne({
      where: {
        email,
      },
    });

    if (deliverymansExist)
      return res.status(400).json({ error: 'Deliveryman already exists.' });

    const { id, name, avatar_id } = await Deliveryman.create(req.body);

    await Queue.add(DeliveryManCreated.key, { id, name, email });

    return res.json({ id, name, email, avatar_id });
  }

  async show(req, res) {
    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id, {
      attributes: ['id', 'name', 'email', 'avatar_id'],
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

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman not found' });

    const { name, email, avatar_id } = await deliveryman.update(req.body, {
      new: true,
    });

    return res.json({ name, email, avatar_id });
  }

  async delete(req, res) {
    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exist' });
    }

    await deliveryman.destroy();

    return res.json();
  }
}

export default new DeliverymanController();
