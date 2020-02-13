import Mail from '../lib/Mail';

class DeliveryAlert {
  get key() {
    return 'DeliveryAlert';
  }

  async handle({ data }) {
    const { name } = data;

    await Mail.sendMail({
      to: `Email <email@teste.com>`,
      subject: 'Nova Entrega',
      template: 'deliveryAlert',
      context: {
        name,
      },
    });
  }
}

export default new DeliveryAlert();
