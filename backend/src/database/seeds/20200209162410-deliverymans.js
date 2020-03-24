const faker = require('faker');

faker.locale = 'pt_BR';

module.exports = {
  up: queryInterface => {
    const deliverymans = [];

    for (let i = 1; i <= 100; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const number = faker.random.number({
        min: 1,
        max: 10,
      });
      const email = faker.internet.email(firstName, `${lastName}${number}`);

      deliverymans.push({
        name: `${firstName} ${lastName}`,
        email,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    return queryInterface.bulkInsert('deliverymans', deliverymans, {});
  },

  down: () => {},
};
