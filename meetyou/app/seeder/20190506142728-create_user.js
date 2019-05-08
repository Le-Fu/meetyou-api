'use strict';

const utils = require('utility');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        email: 'ssmdmsn@gmail.com',
        password: utils.md5('000000'),
        // inviter_id: 0,
        name: 'MengSio',
        // weixin: 'xxxx',
        // weibo: 'xxxx',
        // receive_remote: 0,
        // email_verifyed: 1,
        // avatar: 'xxxx.jpg',
        createdAt: new Date(),
        updatedat: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    queryInterface.bulkDelete('Users');
  },
};
