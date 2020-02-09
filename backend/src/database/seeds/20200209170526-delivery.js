const faker = require('faker');

module.exports = {
  up: queryInterface => {
    const deliveries = [];

    for (let i = 1; i <= 100; i++) {
      const end_date = faker.random.boolean() ? new Date() : null;

      const canceled_at =
        faker.random.boolean() && faker.random.boolean() ? new Date() : null;

      deliveries.push({
        recipient_id: faker.random.number({
          min: 1,
          max: 100,
        }),
        deliveryman_id: faker.random.number({
          min: 1,
          max: 100,
        }),
        product: faker.commerce.productName(),
        start_date: new Date(),
        canceled_at,
        end_date,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    return queryInterface.bulkInsert('deliveries', deliveries, {});
  },

  down: () => {},
};
