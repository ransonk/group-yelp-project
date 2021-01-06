'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        rating: 5,
        description: 'Love this place!! Their food is awesome and their specials rock my socks!! Try their Cauliflower appetizer and their coconut club sandwich. Very Vegan Friendly.',
        userId: 10,
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 1,
        description: `This is the worst McDonald'
        s I've ever been to in my life, the guy who took my order 
        (blonde tips over his nasty hair) was so damn rude. I ordered a #9 meal, which was supposedly suppose to come with two cheeseburger, only came with one cheeseburger. He was mumbling and not speaking clearly enough for me to hear, I thought he said what sauce, side, etc? Then this rude ass guy started raising his voice at me and was like, "NO, I SAID SIZE!!! Thinking that I don'
        t speak English perhaps ? At that moment,
        I should've just walked out, don
        t nobody raise their voice at a customer.He clearly is not educated enough to be working at "McDonald''s",
        please fire him.You guys will be losing a lot of business from his lack of clarity and unclassy customer service.
        `, userId: 11, restaurantId: 3, createdAt: new Date(), updatedAt: new Date() },
      {
        rating: 4,
        description: `Pre-pandemic, was lucky to go with a group of colleagues/friends for a private dining experience. Wow. There was just as much food as my family would make for a gathering (which is to say tons), and it was just as tasty as I thought it would be. Having our own server and room also totally made the experience (and kept the wine really flowing...not a time to be worried about the budget).

In the pandemic, try the takeout and keep the dream alive that you will one day experience in-person dining like that again.`,
        userId: 12,
        restaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `This is the best Korean BBQ spot all the time for us!!! We are so glad they're open for dining in now! All the staffs and customers wear masks and  practice social distance while inside. Food and service still fantastic!! Upload a picture before COVID-19 happened. Only change is bottle water instead of hot tea.`,
        userId: 13,
        restaurantId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        description: `We eat here on the reg. Wonderful nachos and great prices. Thank you for making great food!`,
        userId: 14,
        restaurantId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `We ordered some food here tonight to have a nice dinner. Unfortunately, I can't explain how upset I'm about the food we had. The taste of the chicken was like unexpected bad...it was overcooked and really fat. Fortunately, the chicken came with some vegetables so at least I could eat vegetable with rice. Additionally, the hot and sour soup didn't taste like the traditional one you can get everywhere. To sum up, I won't order here again!`,
        userId: 15,
        restaurantId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Hidden gem. Quite possibly the best pizza I've ever had. Rivals NYC pizza shops....the small mom and pop ones with the brick ovens. This place offers fresh ingredients and full of flavor.  Not easy to park but you can definitely walk right up. Doesn't offer eat in seating but not a big deal. Plenty of spots nearby to sit and enjoy.  I ordered four pies in all and their farro salad.  The salad caught me off guard. It was extremely tasteful. The pizza with greens was amaze-balls`,
        userId: 16,
        restaurantId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Gross. Filthy dirty. Disappointing. Crew stands around yakking whole bathrooms are filthy, trash cans overflowing. Gross. Health department should come inspect. Disgusting. Always like this. Such a great location and clientele being squandered.`,
        userId: 17,
        restaurantId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Food is great! Any time we have company in town we make sure they experience the baked goods here`,
        userId: 18,
        restaurantId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      {
        rating: 5,
        description: 'Love this place!! Their food is awesome and their specials rock my socks!! Try their Cauliflower appetizer and their coconut club sandwich. Very Vegan Friendly.',
        userId: 10,
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `This is the worst McDonald'
        s I've ever been to in my life, the guy who took my order 
        (blonde tips over his nasty hair) was so damn rude. I ordered a #9 meal, which was supposedly suppose to come with two cheeseburger, only came with one cheeseburger. He was mumbling and not speaking clearly enough for me to hear, I thought he said what sauce, side, etc? Then this rude ass guy started raising his voice at me and was like, "NO, I SAID SIZE!!! Thinking that I don'
        t speak English perhaps ? At that moment,
        I should've just walked out, don
        t nobody raise their voice at a customer.He clearly is not educated enough to be working at "McDonald''s",
        please fire him.You guys will be losing a lot of business from his lack of clarity and unclassy customer service.
        `, userId: 11, restaurantId: 3, createdAt: new Date(), updatedAt: new Date() },
      {
        rating: 3,
        description: `Pre-pandemic, was lucky to go with a group of colleagues/friends for a private dining experience. Wow. There was just as much food as my family would make for a gathering (which is to say tons), and it was just as tasty as I thought it would be. Having our own server and room also totally made the experience (and kept the wine really flowing...not a time to be worried about the budget).

In the pandemic, try the takeout and keep the dream alive that you will one day experience in-person dining like that again.`,
        userId: 12,
        restaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `This is the best Korean BBQ spot all the time for us!!! We are so glad they're open for dining in now! All the staffs and customers wear masks and  practice social distance while inside. Food and service still fantastic!! Upload a picture before COVID-19 happened. Only change is bottle water instead of hot tea.`,
        userId: 13,
        restaurantId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `We eat here on the reg. Wonderful nachos and great prices. Thank you for making great food!`,
        userId: 14,
        restaurantId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `We ordered some food here tonight to have a nice dinner. Unfortunately, I can't explain how upset I'm about the food we had. The taste of the chicken was like unexpected bad...it was overcooked and really fat. Fortunately, the chicken came with some vegetables so at least I could eat vegetable with rice. Additionally, the hot and sour soup didn't taste like the traditional one you can get everywhere. To sum up, I won't order here again!`,
        userId: 15,
        restaurantId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Hidden gem. Quite possibly the best pizza I've ever had. Rivals NYC pizza shops....the small mom and pop ones with the brick ovens. This place offers fresh ingredients and full of flavor.  Not easy to park but you can definitely walk right up. Doesn't offer eat in seating but not a big deal. Plenty of spots nearby to sit and enjoy.  I ordered four pies in all and their farro salad.  The salad caught me off guard. It was extremely tasteful. The pizza with greens was amaze-balls`,
        userId: 16,
        restaurantId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Gross. Filthy dirty. Disappointing. Crew stands around yakking whole bathrooms are filthy, trash cans overflowing. Gross. Health department should come inspect. Disgusting. Always like this. Such a great location and clientele being squandered.`,
        userId: 17,
        restaurantId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Food is great! Any time we have company in town we make sure they experience the baked goods here`,
        userId: 18,
        restaurantId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: 'Love this place!! Their food is awesome and their specials rock my socks!! Try their Cauliflower appetizer and their coconut club sandwich. Very Vegan Friendly.',
        userId: 10,
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `This is the worst McDonald'
        s I've ever been to in my life, the guy who took my order 
        (blonde tips over his nasty hair) was so damn rude. I ordered a #9 meal, which was supposedly suppose to come with two cheeseburger, only came with one cheeseburger. He was mumbling and not speaking clearly enough for me to hear, I thought he said what sauce, side, etc? Then this rude ass guy started raising his voice at me and was like, "NO, I SAID SIZE!!! Thinking that I don'
        t speak English perhaps ? At that moment,
        I should've just walked out, don
        t nobody raise their voice at a customer.He clearly is not educated enough to be working at "McDonald''s",
        please fire him.You guys will be losing a lot of business from his lack of clarity and unclassy customer service.
        `, userId: 11, restaurantId: 3, createdAt: new Date(), updatedAt: new Date() },
      {
        rating: 3,
        description: `Pre-pandemic, was lucky to go with a group of colleagues/friends for a private dining experience. Wow. There was just as much food as my family would make for a gathering (which is to say tons), and it was just as tasty as I thought it would be. Having our own server and room also totally made the experience (and kept the wine really flowing...not a time to be worried about the budget).

In the pandemic, try the takeout and keep the dream alive that you will one day experience in-person dining like that again.`,
        userId: 12,
        restaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `This is the best Korean BBQ spot all the time for us!!! We are so glad they're open for dining in now! All the staffs and customers wear masks and  practice social distance while inside. Food and service still fantastic!! Upload a picture before COVID-19 happened. Only change is bottle water instead of hot tea.`,
        userId: 13,
        restaurantId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `We eat here on the reg. Wonderful nachos and great prices. Thank you for making great food!`,
        userId: 14,
        restaurantId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `We ordered some food here tonight to have a nice dinner. Unfortunately, I can't explain how upset I'm about the food we had. The taste of the chicken was like unexpected bad...it was overcooked and really fat. Fortunately, the chicken came with some vegetables so at least I could eat vegetable with rice. Additionally, the hot and sour soup didn't taste like the traditional one you can get everywhere. To sum up, I won't order here again!`,
        userId: 15,
        restaurantId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Hidden gem. Quite possibly the best pizza I've ever had. Rivals NYC pizza shops....the small mom and pop ones with the brick ovens. This place offers fresh ingredients and full of flavor.  Not easy to park but you can definitely walk right up. Doesn't offer eat in seating but not a big deal. Plenty of spots nearby to sit and enjoy.  I ordered four pies in all and their farro salad.  The salad caught me off guard. It was extremely tasteful. The pizza with greens was amaze-balls`,
        userId: 16,
        restaurantId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Gross. Filthy dirty. Disappointing. Crew stands around yakking whole bathrooms are filthy, trash cans overflowing. Gross. Health department should come inspect. Disgusting. Always like this. Such a great location and clientele being squandered.`,
        userId: 17,
        restaurantId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Food is great! Any time we have company in town we make sure they experience the baked goods here`,
        userId: 18,
        restaurantId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: 'Love this place!! Their food is awesome and their specials rock my socks!! Try their Cauliflower appetizer and their coconut club sandwich. Very Vegan Friendly.',
        userId: 10,
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `This is the worst McDonald'
        s I've ever been to in my life, the guy who took my order 
        (blonde tips over his nasty hair) was so damn rude. I ordered a #9 meal, which was supposedly suppose to come with two cheeseburger, only came with one cheeseburger. He was mumbling and not speaking clearly enough for me to hear, I thought he said what sauce, side, etc? Then this rude ass guy started raising his voice at me and was like, "NO, I SAID SIZE!!! Thinking that I don'
        t speak English perhaps ? At that moment,
        I should've just walked out, don
        t nobody raise their voice at a customer.He clearly is not educated enough to be working at "McDonald''s",
        please fire him.You guys will be losing a lot of business from his lack of clarity and unclassy customer service.
        `, userId: 11, restaurantId: 3, createdAt: new Date(), updatedAt: new Date() },
      {
        rating: 3,
        description: `Pre-pandemic, was lucky to go with a group of colleagues/friends for a private dining experience. Wow. There was just as much food as my family would make for a gathering (which is to say tons), and it was just as tasty as I thought it would be. Having our own server and room also totally made the experience (and kept the wine really flowing...not a time to be worried about the budget).

In the pandemic, try the takeout and keep the dream alive that you will one day experience in-person dining like that again.`,
        userId: 12,
        restaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `This is the best Korean BBQ spot all the time for us!!! We are so glad they're open for dining in now! All the staffs and customers wear masks and  practice social distance while inside. Food and service still fantastic!! Upload a picture before COVID-19 happened. Only change is bottle water instead of hot tea.`,
        userId: 13,
        restaurantId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `We eat here on the reg. Wonderful nachos and great prices. Thank you for making great food!`,
        userId: 14,
        restaurantId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `We ordered some food here tonight to have a nice dinner. Unfortunately, I can't explain how upset I'm about the food we had. The taste of the chicken was like unexpected bad...it was overcooked and really fat. Fortunately, the chicken came with some vegetables so at least I could eat vegetable with rice. Additionally, the hot and sour soup didn't taste like the traditional one you can get everywhere. To sum up, I won't order here again!`,
        userId: 15,
        restaurantId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Hidden gem. Quite possibly the best pizza I've ever had. Rivals NYC pizza shops....the small mom and pop ones with the brick ovens. This place offers fresh ingredients and full of flavor.  Not easy to park but you can definitely walk right up. Doesn't offer eat in seating but not a big deal. Plenty of spots nearby to sit and enjoy.  I ordered four pies in all and their farro salad.  The salad caught me off guard. It was extremely tasteful. The pizza with greens was amaze-balls`,
        userId: 16,
        restaurantId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Gross. Filthy dirty. Disappointing. Crew stands around yakking whole bathrooms are filthy, trash cans overflowing. Gross. Health department should come inspect. Disgusting. Always like this. Such a great location and clientele being squandered.`,
        userId: 17,
        restaurantId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `Food is great! Any time we have company in town we make sure they experience the baked goods here`,
        userId: 18,
        restaurantId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
