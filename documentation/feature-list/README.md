# group-yelp-project

- Name Ideas
    - Welp
    - Munchy
    - Budz
    - Gulp
    - YelpedIn
    - Hangry

## Main Page
    - login / signup
        - JWT token
        - Guest/demo login button ("click to login as guest")
            - Pre-made guest account
        - Customer signup/login
        - Login / signup option if not logged in
        - Profile link/icon when logged in
        - If login / signup unsuccessful, show errors

    - Search / filters
        - Search by restaurant name
        - Category links

    - Links to business pages by category

## Business Page
    - Image gallery (reference URLs)
    - Header
        - restaurant name
        - rating
        - type of food
        - hours
        - phone
        - sit-it/takeout/delivery
        - price-point($$$$)
    - Review section
        - user name
        - Star rating
        - date
        - Description
        - Comment on reviews (troll)
    - Get directions
        - embedded google map
    - Sidebar
        - website
        - phone
        - directions
        - related restaurants (order by rating)

## Profile Page - optional
    - Name
    - Profile Picture
    - Bio
    - Location
    - List of reviews

### Backend
|    Path    |   HTTP Verb   |          Meaning            |
|------------|---------------|-----------------------------|
|    /api/users/token     |      GET      |     logs in user      |
|    /api/users     |     POST      |       logs in user          |
|  /api/businesses  |      GET      |   shows a list of restaur    |
|   /api/users/id/reviews    |      GET      |    gets list of reviews     |
|  /api/businesses/id/reviews  |  GET  | gets all reviews for one business |
|  /api/businesses/id/reviews  |  POST  | gets all reviews for one business |

### Frontend
|    Path            |   HTTP Verb   |          Meaning                   |
|--------------------|---------------|------------------------------------|
|         /          |      GET      |       Show main page               |
|         /          |      POST     |      search restaurants            |
|       /log-in      |      GET      |      Show a log-in form            |
|       /log-in      |      POST     |         logs in user               |
|      /sign-up      |      GET      |      show a sign-up form           |
|      /sign-up      |      POST     |      creates a new user            |
|      /search       |      GET      |   gets list of businesses          |
|      /search       |      POST     |    searches for businesses         |
| /write-a-review/2  |      GET      |        shows review form           |
| /write-a-review/2  |     POST      |    creates a review for restaurant |
|  /restaurants/id   |      GET      |  lists the restaurant and its info |
|      /users/id     |      GET      |        shows uer info              |




| USER TABLE |
| ---------  |
| ID  pk not null not null   |
| profilePic url  |
| lastName  VARCHAR not null|
| firstName VARCHAR not null|
| email  VARCHAR  not null unique |
| Password  VARCHAR not null|

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


<!-- | COMMENTS TABLE |
|----------------|
| ID int pk not null |
| reviewid int not null |
| userid |
| description text(5000) | -->

| LIKES TABLE |
|-------------|
| reviewid |
| userid |
| likeType |






Bonus: Mark reviews funny, cool, useful etc.
Bonus: Comments on comments
-add 1 column parent(id)
recursively call comments matching parent(id)

Bonus: Profile
    - Business login
    ** Customer/business login have different authorizations
Bonus: Friends
-map (embed)
-Get Directions(from side bar)
-messaging (from side bar)
-uses location (enter your address) (from search/filter)


https://app.quickdatabasediagrams.com/#/
(edit: profile's information)
(edit: review's like)
(edit: review table, include photo? => restaurant)


```PROFILE
-----
profileID PK int IDENTITY
name
email
username
password
information

RESTAURANT
-----
restaurantID PK int IDENTITY
name
phoneNumber
location
foodCategory
foodID

REVIEW
-----
reviewID PK int IDENTITY
rating
comment
likes
profileID int FK >- PROFILE.profileID


Q's

- Roles?
