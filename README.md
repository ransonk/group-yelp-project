
# Hangry

Hangry is a Yelp clone web application that allows users to list their restaurants as well as search for restaurants and leave reviews.

[Live Site](https://hangry-yelp-clone.herokuapp.com/)




## Built With

* [JavaScript](https://www.javascript.com/)
* [Node.js]()
* [Sequelize]()
* [Express.js](https://expressjs.com/)
* [Pug](https://pugjs.org/api/getting-started.html)


## Getting Started

1. Clone this repository
* `git clone https://github.com/ransonk/group-yelp-project.git`
2. Install dependencies
* `npm install`
3. Create a .env file using the .envExample file as a basis
4. Create a user and database with that user as owner that match the .env file you created
5. Run
* `npx dotenv sequelize db:migrate`
* `npx dotenv sequelize db:seed:all`
* `npm start`


## MVPs
* List your business
* Review restaurants
* Search for restaurants
* Manage your profile

![GitHub Logo](/documentation/images/logo.png)
Format: ![Alt Text](url)


## Database


| USER TABLE |
| ---------  |
| ID  pk not null not null   |
| profilePic url  |
| lastName  VARCHAR not null|
| firstName VARCHAR not null|
| email  VARCHAR  not null unique |
| Password  VARCHAR not null|
| type VARCHAR not null |



| RESTAURANT TABLE  |
|-------------------|
| ID pk not null    |
| name  VARCHAR(50) not null |
| phone integer            |
| city VARCHAR not null  |
| state VARCHAR not null    |
| address VARCHAR not null |
| food category VARCHAR not null |
| dine-in boolean not null|
| takeout boolean not null |
| delivery boolean not null |
| userId integer not null |



| IMAGES TABLE |
|--------------|
| imagecategory|
| restaurantid |
| imageurl     |
| userId      |



| REVIEW TABLE |
|--------------|
| ID pk not null |
| rating integer not null|
| description text(5000) not null |
| userid FK integer not null    |
| restaurantid FK integer not null |
| parentId integer |



| LIKES TABLE |
|-------------|
| reviewid |
| userid |
| likeType |



## Links

[Database Schema (image)](/documentation/DBschema.png)

[API Routes](/documentation/apiRoutes.md)
