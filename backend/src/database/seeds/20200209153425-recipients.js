const faker = require('faker');

module.exports = {
  up: queryInterface => {
    const recipients = [];
    for (let i = 1; i <= 100; i++) {
      recipients.push({
        name: faker.company.companyName(),
        street: faker.address.streetName(),
        number: faker.random.boolean()
          ? faker.random.number({
              min: 100,
              max: 1000,
            })
          : null,
        state: faker.address.state(),
        city: faker.address.city(),
        complement: faker.random.boolean() ? faker.lorem.words() : null,
        cep: faker.random.number({
          min: 10000000,
          max: 99999999,
        }),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    return queryInterface.bulkInsert('recipients', recipients, {});
  },

  down: () => {},
};
