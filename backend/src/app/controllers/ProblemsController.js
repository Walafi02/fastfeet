import { DeliveryProblems, Delivery } from '../models';

class ProblemsController {
  async index(req, res) {
    const { page = 1, paginate = 10 } = req.query;

    const deliveryProblems = await DeliveryProblems.paginate({
      attributes: ['id', 'description'],
      page,
      paginate,
      order: [
        ['updated_at', 'DESC'],
        ['id', 'ASC'],
      ],
      include: [{
        model: Delivery,
        attributes: ['id', 'canceled_at'],
        as: 'delivery',
        where: {
          canceled_at: null,
        }
      }]
    });

    return res.json(deliveryProblems);
  }
}

export default new ProblemsController();
