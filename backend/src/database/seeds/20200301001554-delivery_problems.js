const faker = require('faker');

faker.locale = 'pt_BR';

module.exports = {
  up: queryInterface => {
    const problems = [];
    for (let i = 1; i <= 25; i++) {
      problems.push({
        delivery_id: faker.random.number({
          min: 1,
          max: 100,
        }),
        description: faker.lorem.paragraphs(1),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    return queryInterface.bulkInsert('delivery_problems', problems, {});
  },

  down: () => {},
};
