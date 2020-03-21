import { DeliveryProblems } from '../models';

class ProblemsController {
  async index(req, res) {
    const { page = 1, paginate = 10 } = req.query;

    const deliveryProblems = await DeliveryProblems.paginate({
      attributes: ['id', 'description'],
      page,
      paginate,
    });

    return res.json(deliveryProblems);
  }
}

export default new ProblemsController();
