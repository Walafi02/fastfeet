class DeliveryAlert {
  get key() {
    return 'DeliveryAlert';
  }

  async handle({ data }) {
    await console.log('data', data);
  }
}

export default new DeliveryAlert();
