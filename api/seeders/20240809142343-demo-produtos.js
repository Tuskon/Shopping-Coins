'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('produtos', [
        {
          nome: 'Notebook L24',
          preco: 4000,
          quantidade: 40,
          type:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome:'Relógio DaHORA',
          preco:2500,
          quantidade:25,
          type:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome:'Óculos VR',
          preco:6000,
          quantidade:20,
          type:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Camisa Roxa',
          preco: 2500,
          quantidade: 20,
          type:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Notebook L242',
          preco: 14000,
          quantidade: 20,
          type:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome:'Relógio DaHORA2',
          preco:7000,
          quantidade:20,
          type:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome:'Óculos VR2',
          preco: 3000,
          quantidade: 15,
          type:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome:'Camisa Roxa2',
          preco:5000,
          quantidade:10,
          type:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome:'Relógio DaHORA3',
          preco: 2000,
          quantidade:15,
          type:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome:'Óculos VR3',
          preco:4000,
          quantidade:15,
          type:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('produtos', null, {});
     
  }
};
