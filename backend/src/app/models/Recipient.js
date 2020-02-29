import Sequelize, { Model } from 'sequelize';
import SequelizePaginate from 'sequelize-paginate';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        complement: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        cep: Sequelize.STRING,
        address: {
          type: Sequelize.VIRTUAL,
          get() {
            return `Rua ${this.street}, ${this.number || 'S/N'}, ${
              this.city
            } - ${this.state}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

SequelizePaginate.paginate(Recipient);
export default Recipient;
