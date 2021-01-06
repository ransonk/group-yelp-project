
# Hangry

Hangry is a Yelp clone web application that allows users to list their restaurants as well as search for restaurants and leave reviews.


## Getting Started

1. Clone this repository
2. Install dependencies (npm install)
3. Create a .env file using the .env.example file as a basis
4. Create a user and database with that user as owner that match the .env file you created
5. Run
    * npx dotenv sequelize db:migrate
    * npx dotenv sequelize db:seed:all
    * npm start




[Live Site](https://hangry-yelp-clone.herokuapp.com/)
[Features](/documentation/features.md)
[Database Schema (image)](/documentation/DBschema.png)
[Database Schema (text)](/documentation/DBschema.md)
[Frontent Routes](/documentation/frontendRoutes.md)
[API Routes](/documentation/apiRoutes.md)
[Redux Store Tree](/documentation/store.md)