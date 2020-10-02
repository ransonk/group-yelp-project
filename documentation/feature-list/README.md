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
        - Likes
    - Get directions
        - embedded google map
    - Sidebar
        - website
        - phone
        - directions
        - related restaurants (order by rating)

## Search Results Page

    - Header Searchbar
    - Sort by options
        - Price point
        - Food category
        - Rating
        - Service offered (dine-in, takeout, delivery)
    - List of results

## Profile Page - optional
    - Name
    - Profile Picture
    - Bio
    - Location
    - List of reviews




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

| REVIEW TABLE |
|--------------|
| ID pk not null |
| rating integer not null|
| description text(5000) not null |
| userid FK integer not null    |
| restaurantid FK integer not null |

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



Bonus: Profile
    - Business login
    ** Customer/business login have different authorizations
Bonus: Friends
-map
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
