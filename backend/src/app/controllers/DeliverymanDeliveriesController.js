class DeliverymanDeliveriesController {
  async index(req, res) {
    const { id, status } = req.params;

    const query = {
      deliveryman_id: id,
      end_date: status === 'done' ? null : !null,
      canceled_at: null,
    };

    console.log('query', query);
    return res.json(query);
  }
}

export default new DeliverymanDeliveriesController();
