'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        rating: 5,
        description: 'Love this place!! Their food is awesome and their specials rock my socks!! Try their Cauliflower appetizer and their coconut club sandwich. Very Vegan Friendly.',
        userId: 10,
        restaurantId: 2,
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
        rating: 2,
        description: `We ordered some food here tonight to have a nice dinner. Unfortunately, I can't explain how upset I'm about the food we had. The taste of the chicken was like unexpected bad...it was overcooked and really fat. Fortunately, the chicken came with some vegetables so at least I could eat vegetable with rice. Additionally, the hot and sour soup didn't taste like the traditional one you can get everywhere. To sum up, I won't order here again!`,
        userId: 15,
        restaurantId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `Hidden gem. Quite possibly the best pizza I've ever had. Rivals NYC pizza shops....the small mom and pop ones with the brick ovens. This place offers fresh ingredients and full of flavor.  Not easy to park but you can definitely walk right up. Doesn't offer eat in seating but not a big deal. Plenty of spots nearby to sit and enjoy.  I ordered four pies in all and their farro salad.  The salad caught me off guard. It was extremely tasteful. The pizza with greens was amaze-balls`,
        userId: 2,
        restaurantId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 1,
        description: `Gross. Filthy dirty. Disappointing. Crew stands around yakking whole bathrooms are filthy, trash cans overflowing. Gross. Health department should come inspect. Disgusting. Always like this. Such a great location and clientele being squandered.`,
        userId: 17,
        restaurantId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        description: `Food is great! Any time we have company in town we make sure they experience the baked goods here`,
        userId: 18,
        restaurantId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        This was one of my favorite spots during the summertime! The food was great and the drinks were even better. I came here last week with some friends since the new covid restriction - only outdoor dining is allowed now. There were clear tents over the tables and they were well heated in my opinion, my friends were cold however. We snacked on some appetizers, the corn being our favorite. Drinks were smooth as well. I just wish it wasn't raining. I also thought the tables could have been spaced out a little more. In the tent there's not much room to walk and distance if someone is walking from the opposite end.
        `,
        userId: 10,
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `
        I decided to come to this McDonald's and use the drive through, around 10:15pm tonight, I had a long day traveling and just wanted to get something yummy but quick due to the fact that a bed was calling my name so tired of traveling so I speak to the person (female) I provide my order of the Big Mac meal with no salt on my fries, I also requested extra lettuce, the drive through person looked overwhelmed just running around try to get the food together, they have windows invaded in plexiglass but no welcoming hello no smile actually was rushing I paid she gave me the bag, I asked no salt on the fries? She said yes no salt on the fries and walk away, I drove away, I stop and proceeded to park so I could enjoy my McDonald fries that actually enveloping my car with a irresistible mouth watering aroma of fresh fries!!! I was so happy the fries were freshly made shoe string style with an outer crisp and soft potato inside oh!!!! So good plus satisfying, but how I Love these fries, then I get ready, my tongue tingles with joy of eating my Big Mac, I have a serious relationship with the Big Mac since I was a pre-teenager, after church my family would head over to McDonald's which included my mother's brothers and sisters, at the time they were fourteen of them most married with their spouses and all the children basically we would take over the McDonald's every Sunday after church, ok enough reminiscing back to the Big Mac, the first time I had a Big Mac I fell in love with that magic sauce but the bread in the middle is the best, it makes the Big Mac special but then the sour pickles, fresh crunchy lettuce, oh don't forget the slice of cheese that covers the patty light a blanket of love, so biting into this combination of so many flavors has a hold on me still into my adulthood so ok I open my little box where my Big Mac is waiting for me to devour with a raging hunger of a day of traveling with no stopping for any food, so as I finished my last fries I open the box and I am not able to express the sadness I felt looking at a very sloppy put together in such a rush that there was no magic sauce but a dip of a drop of the sauce that makes the Big Mac so uniquely delicious, it had three pieces of lettuce that's it three pieces, then I realize the worst the meat is not juicy but very hard and dried but the worst was yet to come it was cold, it's so disappointing and yes it's just a meal but after traveling since 4:30 am I just really wanted my Big Mac, I just put it in the trash but forgot to take a picture but believe me it was a mess, they are following Covid-19 guidelines, staff has mask and gloves, so I have interacted with the morning shift they are the ones I give the three stars, they are friendly, courtesy and welcoming. I usually get my Big Mac fix from the morning shift, always have received beautiful Big Mac with great customer services.  So try to order early and skip the evening ordering. This McDonald's is newly renovated, it beautifully updated, cleaned and has a great kids zone to play in.

        `, userId: 7, restaurantId: 3, createdAt: new Date(), updatedAt: new Date() },
      {
        rating: 2,
        description: `
        This place is cool if you're into creepy waiters and dollar store tortilla chips. I gave it an extra star because I was really hungry and it was the only place open on the neighborhood.

        `,
        userId: 12,
        restaurantId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        Ordered for delivery and their pizza is super large and delicious. The wings were fabulous too
Great price and great food
        `,
        userId: 13,
        restaurantId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        This restaurant was delicious, clean and very nice overall. We were a little nervous because it's New Years Day, but with a reservation it was easy to get seated. And even though it was busy, the wait staff were all very kind and fast in getting our meal. The restroom was also surprisingly nice with automatic soap and paper towel machines.

        `,
        userId: 14,
        restaurantId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 2,
        description: `
        Way overpriced for the quality.  Seltzers are completely watered down which is crazy at $10 a piece.  Both sandwiches we ordered came out wrong.  Such a bummer bc we want to support during these times but don't have the money to waste.  Hope they can turn it around.
        `,
        userId: 15,
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 1,
        description: `
        If I could give zero stars I would. I honestly don't know why I keep coming back here. The bathroom is dirty and the toilets don't flush. The ice cream machine didn't work but she still charged me for a milkshake that I couldn't get. Then, the fountain drink that I wanted poured out water instead of the actual drink. The staff was on their phones and barely paying attention to the costumers. This place is honestly ridiculous, DON'T GO HERE! There's a Wendy's and Five Guys down the street...
        `,
        userId: 16,
        restaurantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        I was in Poconos last week and went to this place for breakfast, this place took me by surprise by their vegan sandwich . That amount of beetroot I could have never eaten, what a tasty , yum vegan sandwich. If you are around this place do try their sandwiches, my friends tool other sandwiches in the menu and even they loved  those.

        `,
        userId: 17,
        restaurantId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        Great spot that took semi-last minute reservations via phone.  I will preface this with the fact that I have a mild aversion to KBBQ only because of the smell afterward that I cannot get out of my clothes and hair even after 2 showers (is it just me... ?!) but I had the best of both worlds since they moved everything outdoors for COVID!  First things first, don't search for street parking, it took forever and we were late; just go for valet parking, it's so much easier.  They have a good number of outdoor tables and they bring you the burner that you cook on.  The tables were a bit slanted (my chopsticks kept rolling off, or attempting to) given the fact that the outdoor seating was in their original parking lot.  They have a good selection of Korean beer (need to go with the salty meatssss), and well priced to boot.  The meat was quite fresh, we ordered a combo set (meant for 4, only had 3 people).  Lots of banchan that you could ask more of.  They help you cook and cut the meat, though I saw other tables that were doing it themselves.  This isn't an AYCE place, so meat quality was a bit better, though we ordered pricier cuts.  The outdoor experience was quite enjoyable, and I didn't have to worry about my hair smelling afterward! I would come back (once outdoor dining is allowed again) to get my KBBQ fix!

        `,
        userId: 18,
        restaurantId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `
        Took a couple tries to catch this place open. First time we came they were randomly closed (it was during regular business hours and nothing was posted on the IG, but there was a sign on the door) so that was a wasted trek.

Super thin crust that's also super crispy-charred. To me, it's the kind of slice I'd enjoy if it were cheaper. I think at the price point I was expecting a bit more so set myself up for disappointment. I wouldn't go out of my way to go back but would eat it again.
        `,
        userId: 10,
        restaurantId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        description: `
        This place has decent Chinese food.  There are tables to eat at but it's not waitress service. When visiting the Poconos and staying at the near by resort, it's the perfect place for a hot good meal.

        `, userId: 11, restaurantId: 7, createdAt: new Date(), updatedAt: new Date() },
      {
        rating: 4,
        description: `
        So I finally tried this place the other day. Freaking awesome! True California burrito with treat sauces and awesome gauc! Finally an alternative to chipotle that actually benefits local business. The vegetarian burrito was great, I wish there was a little more veggies in it but other than that a great local spot with spot on food.

        `,
        userId: 12,
        restaurantId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        Cute little coffee shop on the east end of town. Owner was SUPER friendly and helped me to pick out something for what I was craving. Each drink is for sure made with love! Tons of local artwork and artisans too!

The oat milk cold brew was fantastic. I got the seasonal chocolate peppermint drink - just didn't really do it for me, but I also asked for it less sweet.
        `,
        userId: 13,
        restaurantId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 1,
        description: `
        Now this was the second chance I gave them and still was disappointed
The first time I ordered the steak taco soft shell and it gave me the worst pains in my chest. I did not like the way it came with so little in the taco and I forgot to take a pic. That was like a month ago. So this month I said let me give them another chance and low and behold they disappointed me again. I got the ceasar chicken salad smh. They gave me more croutons than chicken and then they gave me chicken pieces crumbled up. So it was bits of dark meat and white meat but in little peices smh. I swear the order came so fast I thought they were literally downstairs in my building lol. My coworkers swear by this place and I just don't know why. I am a foodie and this stuff was pure garbage and I will never order from them again.
        `,
        userId: 14,
        restaurantId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        This is my go to pizza place. The pizza is very good, price point is too, and they're always very friendly. I'm not a fan of chain pizza, I prefer mom and pop type places, and this is exactly that. Kudos to the staff for always serving us well!

        `,
        userId: 15,
        restaurantId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `
        I've been looking for a good place for Chinese food in Dallas and I saw lots of positive reviews from this restaurant, so I decided to give it a try. I ordered through UberEats for the first time and the food arrived quickly and was still hot on arrival. I ordered the orange chicken with fried rice, a side of vegetable lo mein, and an egg roll. I was really disappointed with the quality of the orange chicken. The texture of the meat was really chewy and hard and it had no flavor. After two pieces of chicken, I couldn't keep eating it. The fried rice wasn't great, but it wasn't terrible. I did really like taste and texture of the veggie lo mein and the egg roll! I won't be returning here, but I'm glad I gave it a try.

        `,
        userId: 16,
        restaurantId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        Great chill place for happy hour and everything else.  Love the food and the neighborhood vibes.
        `,
        userId: 17,
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        Every staff person in this store was wearing a mask.Five stars.
        `,
        userId: 18,
        restaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 1,
        description: `
        I don't like to write bad reviews but I guess I have to now. This place gave a me a diet coke instead of a regular coke and then gave me a diet coke again. My milkshake was barely filled up at all. Overall this place should do way better at taking orders.

        `,
        userId: 10,
        restaurantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        The kitchen and the staff got it right! Someone taught them well. From the moment we walked in to place our to go order,  we were greeted with a cheerful staff, even in these uncertain times. Although dine in wasn't available because of recent mandates, our takeout experience was A1! The over easy eggs were cooked to perfection without the concern of them being overcooked and it to go container. I'm at a loss for words with their Omelets.  Definitely the best I ever had!  When riding through this area again, my boyfriend and I will absolutely stop in for breakfast anytime. Definitely among the best in the area. Highly recommended!

        `, userId: 13, restaurantId: 4, createdAt: new Date(), updatedAt: new Date() },
      {
        rating: 5,
        description: `
        I like this korean bbq spot. Food is always delicious. We order online and pick it up, order was ready fast. I like their kimchi!

        `,
        userId: 12,
        restaurantId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        I like gourmet pizza, and this place is good in this category. Will be on my list of go-to pizza place

        `,
        userId: 13,
        restaurantId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 1,
        description: `
        If I could give this shithole 0 stars I absolutely would. I am a Chinese food lover but this place almost has made me never want to eat it again. The fried rice tasted like soggy water. The broccoli tasted bitter. Everything was a disgrace. The tables were so sticky , I learned how to eat without my elbows on the table. The only good thing about this place was the hot sauce. Do not waste a penny!

        `,
        userId: 14,
        restaurantId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 5,
        description: `
        Stopped in with a friend for dinner during the week. The restaurant was pretty busy for a weekday, so I had high expectations right off the bat. We were able to get a seat at the bar for a quick appetizer and an entree.

We went with the queso with chorizo as a starter and was pleased with the portion size. This starter is a good choice for 3-4 people. It was the perfect starter before our entrees.

For my entree I picked the burrito gigante with chorizo as my protein. The burrito was full of flavor and beyond filling.

Everything from the service to the food was perfect. The food came out quick and everything was exactly how we wanted it. I look forward to coming back here.
        `,
        userId: 15,
        restaurantId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 4,
        description: `
        Fantastic Breakfast. It was so good we went their twice. Great location,  and great food quality. Highly Recommend!
The Lavender latte was delicious with a smooth flavor. The Almond Croissant was tasty and really good.
The staff are friendly and helpful and are always very very welcoming. If you're looking for excellent quality food, large portions, a great atmosphere, and superb service.
        `,
        userId: 16,
        restaurantId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `
        Great tacos  love their charisma and enthusiasm ! Food is great , I highly recommend it

        `,
        userId: 17,
        restaurantId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rating: 3,
        description: `
        We got delivery through ubereats, we had the margherita, calzone and it was mediocre at best. Gave us a stomach ache. Wouldnt order again

        `,
        userId: 18,
        restaurantId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        Some of the best chinese food I have had. Fresh, tasty. Orange chicken, chicken egg rolls and crispy fried beef!!

        `,
        userId: 10,
        restaurantId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 3,
        description: `
        This place is kinda meh in my opinion.I came here
        for lunch, and they have a decent amount of tables outside on their patio.They are also spaced out pretty well
        for social distancing.The waitress was nice and the service was pretty decent.Their draft list was pretty good.I mostly went because they had Maine Beer Company 's beers on tap. The food here was kinda mediocre at best. I got the brisket sandwich, and it wasn'
        t the best.It did taste smokey, but it was a tad bit fatty and dry.The gravy on the side helped to moisten it up.Good beer list, but the food was just average teetering toward below average.
        `,
        userId: 11,
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        The food is absolutely delicious! Best chicken shawarma I had in years! Their falafel pita sandwich/wrap is really good too. They fill these to the rim! This is AUTHENTIC Arabic food. And customer service is top notch.
        `,
        userId: 2,
        restaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 1,
        description: `
        Totally not worth 1 star.  Drive thru is a complete mess.  Incompetent, slow, and rude..  Avoid, unless you feel you the need to punish yourself.
        `,
        userId: 13,
        restaurantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 4,
        description: `
        Brunch to go is always hit and miss but the Brunch burger was everything!!! My specialty pancake was ruined because it was soggy be sure to say  syrup on the side. Can't wait to go back and dine in.

        `,
        userId: 11,
        restaurantId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 1,
        description: `
        I ordered on Grubhub and paid 69 dollars for a dinner for 2. I got to the store and my food was ready. When I drove back to my place and opened the bag, we were surprised by the portion of galbi Jiim. We paid 40 dollars before tax for galbi jiim that is smaller than the size of a boba cup, so not worth it. It's not a fancy restaurant, just a regular restaurant in the Korean town, how on earth would 3 bites of rib cost 40+ dollars?

        `,
        userId: 15,
        restaurantId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        The sauce, meatballs, and dough is all made in house. If you want real authentic recipes with good quality control on the product, make sure to check this place out! Absolutely delicious.

        `,
        userId: 7,
        restaurantId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 3,
        description: `
        We got a variety of dishes this past weekend and they were all cooked well and the flavors were great! The beef with broccoli, mixed vegetables, hot wonton in oil, ribs, and bbq chicken stick were really good. The chicken lo mein was just okay and I wouldn't order that again. They ended up giving us lots of extra food free, which was great and I would come back again to try some more of their stuff.

        `,
        userId: 17,
        restaurantId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        The best restaurant ever! Yummy!! NEVER a disappointment ALWAYS a satisfied customer! Only open till
3 pm. Don't miss out!
        `,
        userId: 18,
        restaurantId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 4,
        description: `
        I am not from the area and wanted to go to a coffee shop around where I was staying. My mom and I drove around trying to find a drive-thru coffee shop that was NOT Starbucks. We luckily stumbled upon this coffee shop on yelp and decided to give it a try! We pulled up to the curb and they had window service because of Covid, which was convenient. The person who took my order was friendly and attentive. My iced vanilla latte with oat milk was not as sweet as the others I've tried, but it had a good taste. My mom loved her cold brew!  I recommend trying this place out and supporting a local business :)

        `,
        userId: 12,
        restaurantId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 2,
        description: `
        Place does not have very good tacos....had their fish tacos and they were not good sorrt

        `,
        userId: 16,
        restaurantId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 4,
        description: `
        Cute place, ordered the Margherita pizza w/sausage. Pizza was decent but not my favorite, it does have that soft/thin/'watery' taste to it which they say is authentic to Neapolitan pizza. I tend to prefer heavier pizzas. On the pro side the pizza came out really fast, didn't even wait 5 minutes for it. Prices are definitely reasonable, staff is quick and friendly. Had the Nutella Crepe and it was light and tasty, they didn't skimp on the Nutella either which made me happy.

        `,
        userId: 17,
        restaurantId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        Amazing spring rolls and gyoza ! Staff was very friend and sent us some extra spring rolls too when our food was taking a little long. Everything tasted very fresh. Definitely will be coming back

        `,
        userId: 18,
        restaurantId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        Good vibes, cool setting.Great place to grab a drink outside during COVID.
        `,
        userId: 5,
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 4,
        description: `
        This was a delicious treat. I have been looking for a local Israeli restaurant serving traditional Israeli food and sides. We got the falafel and chicken shawarma with carrots and eggplant. Wow. Everything was amazing. Falafel was the perfect color green as it should be, eggplant had so much flavor I could eat that as a meal in itself with hummus, which was also perfect. I highly recommend giving shai a try!
        `,
        userId: 3,
        restaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 3,
        description: `
        Avoid this place at all cost. If you are looking for place that is possibly doing everything wrong, this is the one.

As were drying from Boston to Indiana, we are looking for a fast food place to eat something quickly and be on our way. As we get in, one lady come to the service position but not to take us but to serve her. As I approached her, she ignored me and proceeded to order for herself. She waited for a few mins for someone to come and help her get her order. Then finally someone came and finally asked what we like. I don't know how she did it but she get the entire order wrong except for fries. We ordered McNuggets and double cheeseburgers. She gave us plain cheeseburger and McChicken. We were stunned so much, we didn't say a single thing and proceeded to try to eat our food. The fries are cold and burgers are so bad, we had to leave partially eaten; left quietly.

Opting  to starve is better than choosing this place as you could not eat the food; starving anyway and spending your hard earned money as well.
        `,
        userId: 8,
        restaurantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        Cheesy chicken noodle casserole was delicious. Comfort food heaven! Frittata was. Very tasty!

        `,
        userId: 10,
        restaurantId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        How is Sun Nong Dan coping with covid!? Bigger togo containers and outdoor seating.

I was curious and a little hesitant to order togo since I assumed that you would get skimped on the galbi jim but I was wrong.. What do they do to compensate? Extra large light tupperware type containers to hold all the galbi jim goodness..  

Workers wear proper PPE but the outdoor seating is a little too close for my comfort.
        `,
        userId: 5,
        restaurantId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        So happy this is in the neighborhood. Great wine selections on opening day. Got the stracciatella and sopressata pizzas, and the chicken meatballs. All around amazing. Really appreciated the stracciatella on the side for the to go pizza, so I didn't have soggy slices when we got home and could reheat and create a great slice when we reheat leftovers tomorrow. Sopressata was delicious as well and while I don't usually like sweet toppings the fermented chili jam was a nice touch and balanced. Chicken meatballs were also great and really homey and comforting.
        `,
        userId: 16,
        restaurantId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        Good chinese food. Service was fast and prices are cheap. Good location and I love their hot and sour soup!

        `,
        userId: 7,
        restaurantId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 4,
        description: `
        Our margaritas were excellent. The food was very good as well. Our table was right against double doors so it was very drafty/cold. Overall, nice atmosphere. It is a little pricey but probably because the location on the lake.

        `,
        userId: 8,
        restaurantId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        Great place to grab coffee. The iced americano is one of my favorites. I'm not a huge sweet coffee drinker but the moon milk is good. Tastes like melted ice cream. You can also buy moon milk by a bottle which is a great addition to take home!

        `,
        userId: 4,
        restaurantId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        The food and drinks were really good. I had the  carnitas tacos w/ rice and sangria. I particularly loved the backyard area. It was very spacious so nobody was sitting on top of each other. The staff was very nice and wearing masks, which made me feel safe. I would definitely come back here and it's super cute

        `,
        userId: 6,
        restaurantId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        Great prices, nice people, and most importantly, amazing pizza! This is my new go to neighborhood spot, I'd recommend it to anyone.

        `,
        userId: 7,
        restaurantId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        Just damn good Chinese food. Hand made noodles a home run.  You can't pass up the place unless you're allergic to flavor.

        `,
        userId: 8,
        restaurantId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        rating: 1,
        description: `
        Service was horrible!  Didn't see our waitress in an hour. Beer is good but they make it impossible to order.
        `,
        userId: 6,
        restaurantId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 3,
        description: `
        This is strictly on the staff not the food. The food is an absolutely 10/10. I have been eating out since restaurants opened in July and have never been to a fine dining restaurant where you order and pay on your phone with no waitress . We wanted to get the tasting menu but had questions and the waitress seemed to get really annoyed that we were bothering her with questions about the menu. Then when we tried to order  and the server on their website was down and again she was annoyed we asked a question and had to get the manager . I'm not sure why we are required to tip 20% when we don't have a waitress and they get annoyed when they have to do their job. It took so long to put in our drink order and then pay and then order food then pay it really killed the vibe for the first 30 minutes .  For one of the best restaurants in the country I'm surprised they are operating like this and taking away from the amazing experience.
        `,
        userId: 4,
        restaurantId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 1,
        description: `
        Awful a.m. drive thru service.  Not that it took long, food was fast and hot, just the attitude. I felt like I punched someone's puppy.

        `,
        userId: 9,
        restaurantId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 3,
        description: `
        We prefer to support local businesses, especially during CoVid, but we probably won't return to this spot. It's quaint and the food is good but our breakfast items arrived almost 30 mins after we were seated. Then my Mom ordered a salad to go. When she ate it later for lunch at home, she found herself pulling a twist tie out of her mouth  good thing she caught it before that sharp, skinny pc of metal went thru her intestines! The salad also was really overpriced. It was small - no more than a side salad and cost $6.
Maybe they were having a bad day. We went there, because a few friends told us how great it was. Oh well, next.
        `,
        userId: 14,
        restaurantId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        This is an amazing quality Korean bbq place! Service was quick and friendly! Food was beyond AMAZING in flavor!!!!! and ordering and pickup was easy! I personally preferred calling them rather than ordering through a third party. This is a wonderful place to order from as we haven't had KBBQ since the pandemic started and I am so glad we broke that streak with this place!

        `,
        userId: 6,
        restaurantId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        I ordered an angry pizza and a seasonal summer corn pizza to go a few weeks ago, planning to eat it on my roof with a nice glass of wine. But my car smelled like tomatoes and cheese and I was literally salivating, so I ended up eating most of my meal out of open pizza boxes in the passenger seat of my car!
Although the atmosphere of my meal was a bit cramped (my fault, I admit), the pizza was delish! The angry pizza was MAYBE too spicy for me, so I ended up picking off a few of the peppers, but the arrabbiata sauce was to die for. The corn pizza was the perfect creamy and slightly sweet juxtaposition to the other spicy one. The crusts of both pizzas were perfectly thin and crisp, and the cheese was melty and beautiful.
Will I be ordering from here again? Definitely. Will I be able to resist temptation, and wait to eat it at home? Can't guarantee that.
        `,
        userId: 3,
        restaurantId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 3,
        description: `
        The food is not that great. also if you're looking for Chinese food like your used to in the tri state area this is not it. I did not really understand on the phone what they meant about the sauce until i got it, chicken with broccoli is supposed to be with a soy sauce type sauce and this was "white" as they said. it really just tastes very bland  like a oil sauce or chicken franchise without the lemon. someone else got sesame chicken but it's just not what we were expecting. i do not recommend

        `,
        userId: 8,
        restaurantId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 1,
        description: `
        This place is terrible I have found a staple
In my food the severs were very very VERY rude the food tasted terrible I bet these people reuse tortilla chips because the one that I found had really old moldy salsa on it. I suggest you never come her because bad service bad food and you might have a staple
In your Burrito and you might almost die I like I did.
        `,
        userId: 10,
        restaurantId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        I judge coffee shops based on their chai, since I'm not really much of a coffee drinker. Honestly, the chai might be a boxed concoction, but it's the best chai in all of Austin, imo! Whether it's hot or iced, there's always just enough sweetness and spiciness for me. I will say to make sure you stir your chai before drinking it or else you'll be left with a bunch of plain milk and end up drinking all of the chai at the bottom. Learned my lesson lol. Aside from the drinks, Flightpath is my go-go patio for productivity. It's really hard to get shit done at some of the places around town because of a lack of outlets, crowded seating, etc. But Flightpath has it all. Just enough seats for people to come and go -- I've never NOT found somewhere to sit -- and plenty of outlets. My favorite spots are the mini picnic tables outside with individual outlets, where you can enjoy the fresh air and the funky atmosphere. Some people come to chat but it's rarely the obnoxious type and everyone here is usually looking to get some work done or chill. I've met some interesting and friendly people here. Oh, and I pretty much love all of the baristas. I don't know why people expect baristas to be so engaged with them all the time when they are literally running the shop and there are 57482928393 other customers to tend to. They're never short, always just friendly enough, and if you keep going back for a refill or there's some dead time they WILL totally make conversation with you. Pay with cash and get a small discount -- I usually just use the discount to tip a little bit more. I hope this place never goes away :)

        `,
        userId: 15,
        restaurantId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 3,
        description: `
        Very polite staff, generous when asking for extra sauces. Food is okay. Burritos were bland and overpacked with rice and beans which didn't leave much room for meat selection. I wouldn't mind coming back here but I imagine I'll have to ask for extra protein and will have to pay extra. Quick & Cheap dinner option

        `,
        userId: 9,
        restaurantId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 5,
        description: `
        Ordered a large half cheese half pepperoni. This pizza needs to be eaten on the spot for it to be enjoyed at its best. It's a great meal for $25. The best thing about this place was how they're handling the orders & pickup. They have a tent setup outside & you just pickup your order. It felt safe & it was efficient. A must try if you're in the area & are looking for a quick meal.

        `,
        userId: 8,
        restaurantId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        rating: 1,
        description: `
        This is by far the worst Chinese food I have ever had. Where the fried rice?  Looked more like supposed to be Boiled rice. No flavor what so ever. General Ching Chicken, horrible. Who the hell is General Ching. General Tso yes, but wtf. Omg I will never ever ever eat here again. I'm going to throw up now before my insides deteriorate.

        `,
        userId: 9,
        restaurantId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
