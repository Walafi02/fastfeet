const faker = require('faker');

module.exports = {
  up: queryInterface => {
    const deliveries = [];

    for (let i = 1; i <= 100; i++) {
      const start_date = faker.random.boolean() ? new Date() : null;
      const status = start_date
        ? faker.random.arrayElement(['done', 'canceled', null])
        : null;

      deliveries.push({
        recipient_id: faker.random.number({
          min: 1,
          max: 10,
        }),
        deliveryman_id: faker.random.number({
          min: 1,
          max: 10,
        }),
        product: faker.commerce.productName(),
        start_date,
        canceled_at: status === 'done' ? new Date() : null,
        end_date: status === 'canceled' ? new Date() : null,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    return queryInterface.bulkInsert('deliveries', deliveries, {});
  },

  down: () => {},
};
