'use strict';

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Pedro Porro',
        email: 'porro@a.com',
        password_hash: await bcryptjs.hash('12345678', 12),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Ariano Suassuna',
        email: 'suassun@a.com',
        password_hash: await bcryptjs.hash('12345678', 12),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Arigato Saionara',
        email: 'saionar@a.com',
        password_hash: await bcryptjs.hash('12345678', 12),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Lamin Yamal',
        email: 'lamal@a.com',
        password_hash: await bcryptjs.hash('12345678', 12),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Dani Olmo',
        email: 'olmo@a.com',
        password_hash: await bcryptjs.hash('12345678', 12),
        created_at: new Date(),
        updated_at: new Date()
      },
    ],
    {});
  },

  async down () {}
};
