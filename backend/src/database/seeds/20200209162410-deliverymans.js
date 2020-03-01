const faker = require('faker');

faker.locale = 'pt_BR';

module.exports = {
  up: queryInterface => {
    const deliverymans = [];

    for (let i = 1; i <= 100; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const email = faker.internet.email(firstName, lastName);

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
