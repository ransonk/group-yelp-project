'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/stayuber/128.jpg',
        lastName: 'Smitham',
        firstName: 'Mavis',
        email: 'Felicia_Pfeffer@hotmail.com',
        hashedPassword: 'j2OeBH3yPH_cbRnti0TdY6NAGjBLPx',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/santi_urso/128.jpg',
        lastName: 'Streich',
        firstName: 'Pearline',
        email: 'Clare31@hotmail.com',
        hashedPassword: 'XSG3cxdWyZGlzqzt8nhPG5JnSs7pZD',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/the_winslet/128.jpg',
        lastName: 'Jerde',
        firstName: 'Clyde',
        email: 'Lukas5@hotmail.com',
        hashedPassword: 'Iu0zfZ4j42vU_SF8YEew0m1Q8UO988',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/allthingssmitty/128.jpg',
        lastName: 'Terry',
        firstName: 'Jefferey',
        email: 'Xavier71@yahoo.com',
        hashedPassword: 'crSj044KNUi6wPMq5QXYzB1nZzb05k',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
        lastName: 'Cormier',
        firstName: 'Andy',
        email: 'Cristal87@yahoo.com',
        hashedPassword: '3c5IdpPqMeL9fDX_gHcTSulC61nOfC',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/brandonburke/128.jpg',
        lastName: 'Flatley',
        firstName: 'Alda',
        email: 'Dayana.Cummings@gmail.com',
        hashedPassword: 'Pg4JH0uTJv6SRGxi3UFfoSaWYBR2n8',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/davidsasda/128.jpg',
        lastName: 'Goyette',
        firstName: 'Cassidy',
        email: 'Noel_Parisian@hotmail.com',
        hashedPassword: 'vVTqKCTpWp4YMTAyDzNiJXvS2LRbWZ',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/derienzo777/128.jpg',
        lastName: 'Wilkinson',
        firstName: 'Dawn',
        email: 'Rey16@hotmail.com',
        hashedPassword: 'JseqVWbzzxhqSmckBlWlDT8R1klcU1',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ripplemdk/128.jpg',
        lastName: 'Cassin',
        firstName: 'Omari',
        email: 'Britney98@yahoo.com',
        hashedPassword: 'HV4MKJUX2nIVf5S6VcFBAWezMx_VMb',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/brandonflatsoda/128.jpg',
        lastName: 'Lang',
        firstName: 'Mae',
        email: 'Maximillia15@yahoo.com',
        hashedPassword: 'OLm5C_6c_D7sDHbRtAlnJdIyV8tvGK',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/jjsiii/128.jpg',
        lastName: 'Grimes',
        firstName: 'Marie',
        email: 'Simeon.Bahringer@gmail.com',
        hashedPassword: 'EhhoobPErkEa4mLbVt9Z1ARbfazzj2',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg',
        lastName: 'Larkin',
        firstName: 'Marian',
        email: 'Kameron_Reynolds@yahoo.com',
        hashedPassword: 'fHnyYR0In3BchEzj7py8cvFlNc7euX',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/derekebradley/128.jpg',
        lastName: 'West',
        firstName: 'Francis',
        email: 'Jakob32@hotmail.com',
        hashedPassword: 'w9I76XFgSw9Aqr_FmTVFtVwsVTTYxd',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/amywebbb/128.jpg',
        lastName: 'Schumm',
        firstName: 'Shayna',
        email: 'Dayne_Gorczany@hotmail.com',
        hashedPassword: 'CGLy3ZPbSagarrkZkZLfhgMgcSqp7y',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ninjad3m0/128.jpg',
        lastName: 'White',
        firstName: 'Cristina',
        email: 'Cecilia43@yahoo.com',
        hashedPassword: 'kAeyVlLxJucjXLXE8v4XuBePS53fTP',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/carlosjgsousa/128.jpg',
        lastName: 'Streich',
        firstName: 'Hosea',
        email: 'Elsie_Rowe@yahoo.com',
        hashedPassword: 'sRBDdR9rE3zxQv0VhcrhT1Ehv2RITr',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/al_li/128.jpg',
        lastName: 'Sawayn',
        firstName: 'Boris',
        email: 'Nicolette49@gmail.com',
        hashedPassword: 'HGDLcfWZj1VJk55qLRHTHL6cqvfnRe',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/kapaluccio/128.jpg',
        lastName: 'Friesen',
        firstName: 'Evert',
        email: 'Wilson97@yahoo.com',
        hashedPassword: 'hRI8b_UV6slDvaDcevyWsUbwAd2loC',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/aio___/128.jpg',
        lastName: 'Schmitt',
        firstName: 'Gustave',
        email: 'Mina6@gmail.com',
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/kurtinc/128.jpg',
        lastName: 'Veum',
        firstName: 'Stephanie',
        email: 'Heloise.Maggio21@yahoo.com',
        hashedPassword: 'uGDCX7D0KzOUWRguJeZZrVSQv_9m1f',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
