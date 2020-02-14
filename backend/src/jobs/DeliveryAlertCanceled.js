import Mail from '../lib/Mail';

class DeliveryAlertCanceled {
  get key() {
    return 'DeliveryAlertCanceled';
  }

  async handle({ data }) {
    const { product, deliveryman } = data;

    const { email } = deliveryman;

    await Mail.sendMail({
      to: `Email <${email}>`,
      subject: 'Cancelamento de Entrega',
      template: 'deliveryAlertCanceled',
      context: {
        product,
        deliveryman,
      },
    });
  }
}

export default new DeliveryAlertCanceled();
