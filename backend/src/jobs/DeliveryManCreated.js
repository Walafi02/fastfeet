import Mail from '../lib/Mail';

class DeliveryManCreated {
  get key() {
    return 'DeliveryManCreated';
  }

  async handle({ data }) {
    const { id, name, email } = data;

    console.log(id, name, email)

    await Mail.sendMail({
      to: `Email <${email}>`,
      subject: 'Cadastro de Entregador',
      template: 'deliveryManCreated',
      context: {
        name,
        id,
      },
    });
  }
}

export default new DeliveryManCreated();
