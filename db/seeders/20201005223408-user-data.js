'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        profileUrl: '/images/empty-profile.png',
        lastName: 'Smitham',
        firstName: 'Mavis',
        email: 'Felicia_Pfeffer@hotmail.com',
        hashedPassword: 'j2OeBH3yPH_cbRnti0TdY6NAGjBLPx',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://i.pinimg.com/originals/33/27/c6/3327c62c1624d9d06a08180c85b3f4a2.jpg',
        lastName: 'Streich',
        firstName: 'Pat',
        email: 'Clare31@hotmail.com',
        hashedPassword: 'XSG3cxdWyZGlzqzt8nhPG5JnSs7pZD',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/P537074',
        lastName: 'Jerde',
        firstName: 'Clyde',
        email: 'Lukas5@hotmail.com',
        hashedPassword: 'Iu0zfZ4j42vU_SF8YEew0m1Q8UO988',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: '/images/empty-profile.png',
        lastName: 'Terry',
        firstName: 'Jefferey',
        email: 'Xavier71@yahoo.com',
        hashedPassword: 'crSj044KNUi6wPMq5QXYzB1nZzb05k',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://assets3.thrillist.com/v1/image/1385010/747x498/flatten;crop;jpeg_quality=70',
        lastName: 'Cormier',
        firstName: 'Andy',
        email: 'Cristal87@yahoo.com',
        hashedPassword: '3c5IdpPqMeL9fDX_gHcTSulC61nOfC',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'hhttps://static.vecteezy.com/system/resources/previews/000/241/070/non_2x/flat-boy-with-vintage-glasses-avatar-vector-illustration.jpg',
        lastName: 'Flatley',
        firstName: 'Alda',
        email: 'Dayana.Cummings@gmail.com',
        hashedPassword: 'Pg4JH0uTJv6SRGxi3UFfoSaWYBR2n8',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://up.quizlet.com/tkdox-vv9Qc-256s.jpg',
        lastName: 'Goyette',
        firstName: 'Cassidy',
        email: 'Noel_Parisian@hotmail.com',
        hashedPassword: 'vVTqKCTpWp4YMTAyDzNiJXvS2LRbWZ',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://static.billboard.com/files/2020/03/Lady-Gaga-press-2020-by-Norbert-Schoerner-billboard-1548-1583179375-compressed.jpg',
        lastName: 'W.',
        firstName: 'Dawn',
        email: 'Rey16@hotmail.com',
        hashedPassword: 'JseqVWbzzxhqSmckBlWlDT8R1klcU1',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://up.quizlet.com/1gall3-mjcZz-256s.jpg',
        lastName: 'Cassin',
        firstName: 'Omari',
        email: 'Britney98@yahoo.com',
        hashedPassword: 'HV4MKJUX2nIVf5S6VcFBAWezMx_VMb',
        businessOwner: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://rlv.zcache.com/la_di_da_lady_pop_art_stickers-r2d36da804de24720a164ddda37d4670a_0ugmc_8byvr_307.jpg',
        lastName: 'Lang',
        firstName: 'Mae',
        email: 'Maximillia15@yahoo.com',
        hashedPassword: 'OLm5C_6c_D7sDHbRtAlnJdIyV8tvGK',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://globalnews.ca/wp-content/uploads/2020/06/althea-normal-e1593181781146.jpg?quality=85&strip=all',
        lastName: 'Grimes',
        firstName: 'Marie',
        email: 'Simeon.Bahringer@gmail.com',
        hashedPassword: 'EhhoobPErkEa4mLbVt9Z1ARbfazzj2',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://dy5vgx5yyjho5.cloudfront.net/images/v2/profile-F6h9mTgB23qCW5ox74231.jpg',
        lastName: 'Larkin',
        firstName: 'Marian',
        email: 'Kameron_Reynolds@yahoo.com',
        hashedPassword: 'fHnyYR0In3BchEzj7py8cvFlNc7euX',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly91c2VyLWltYWdlcy5wb2RjaGFzZXIuY29tL2ViMzEzNWVlNzhjMWUwNTM4ZDgwNmEwYTZhZGI5MTczMWYwZTNkYWQ5OTkwODM0NWY3NDM5ZjhmZmFiZGZmYzQucG5n/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D',
        lastName: 'West',
        firstName: 'Francis',
        email: 'Jakob32@hotmail.com',
        hashedPassword: 'w9I76XFgSw9Aqr_FmTVFtVwsVTTYxd',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://assets.quizlet.com/a/j/dist/i/animals/31.f18ad37e9a91770.jpg',
        lastName: 'Schumm',
        firstName: 'Shayna',
        email: 'Dayne_Gorczany@hotmail.com',
        hashedPassword: 'CGLy3ZPbSagarrkZkZLfhgMgcSqp7y',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=1.0&px=999',
        lastName: 'White',
        firstName: 'Cristina',
        email: 'Cecilia43@yahoo.com',
        hashedPassword: 'kAeyVlLxJucjXLXE8v4XuBePS53fTP',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://www.esquireme.com/public/images/2018/01/10/tom-selleck-1.jpg',
        lastName: 'Streich',
        firstName: 'Hosea',
        email: 'Elsie_Rowe@yahoo.com',
        hashedPassword: 'sRBDdR9rE3zxQv0VhcrhT1Ehv2RITr',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://uploads-ssl.webflow.com/5c6ef9c489c368149f717a22/5c92c9ec938b786710b53a3b__Q4A1175.jpg',
        lastName: 'Sawayn',
        firstName: 'Boris',
        email: 'Nicolette49@gmail.com',
        hashedPassword: 'HGDLcfWZj1VJk55qLRHTHL6cqvfnRe',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://d3clc8w717qc4g.cloudfront.net/assets/audioblocks/images/home/guitarist_hero.png',
        lastName: 'Friesen',
        firstName: 'Evert',
        email: 'Wilson97@yahoo.com',
        hashedPassword: 'hRI8b_UV6slDvaDcevyWsUbwAd2loC',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: 'https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/best-practices-stock-photos-guy-on-blue-background.jpg?.dhR3EhqSa.vTRhG6KOPUS8DN1JGAOWh&itok=mO8pFAo3',
        lastName: 'Schmitt',
        firstName: 'Gustave',
        email: 'Mina6@gmail.com',
        hashedPassword: 'EiGG79H1o0UvbPrGV1gWjSSxOZlSLr',
        businessOwner: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        profileUrl: '/images/empty-profile.png',
        lastName: 'Veum',
        firstName: 'Stephie',
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
