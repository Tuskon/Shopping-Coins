'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('usuarios', [
        {
          nome: 'Mary Oliveira de Silva Pinto',
          primeiro_nome:'Mary',
          saldo: 5000000,
          senha:'1234',
          email:'mary@email.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'João Pereira Souza',
          primeiro_nome:'João',
          saldo: 5000000,
          senha:'4321',
          email:'joao@email.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Maria Pereira de Souza Araújo',
          primeiro_nome:'Maria',
          saldo: 5000000,
          senha:'passeinodesafio?:)',
          email:'mariafuracao_cheirosa12',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Roberto Tavares dos Palmares',
          primeiro_nome:'Roberto',
          saldo: 5000000,
          senha:'roberto@lindo4567',
          email:'roberto@email.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'José Luiz Rodrigues dos Santos',
          primeiro_nome:'José',
          saldo: 5000000,
          senha:'jose1560',
          email:'jose@email.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
