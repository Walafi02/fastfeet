import Sequelize, { Model } from 'sequelize';
import SequelizePaginate from 'sequelize-paginate';

class DeliveryProblems extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Delivery, {
      foreignKey: 'delivery_id',
      as: 'delivery',
    });
  }
}

SequelizePaginate.paginate(DeliveryProblems);
export default DeliveryProblems;
