# group-yelp-project


1. login / signup

2. Business Page
-restaurant pics
-name
-reviews(comments)/(average rating)stars / add photo / share / save
-restaurant website link (main page)
-food category
-business hours
-phone #
-sidebar (Main site /  / phone # /  / related restaurants)



3. Search / filters
-sortby feature (restaurants / delivery / takeout / food genre)



4. Reviews / ratings / troll option
-user can leave review / rating
-leave review on other reviews




Bonus: Mark reviews funny, cool, useful etc.
Bonus: Profile
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

PHOTO
-----
photoID pk int IDENTITY FK >- restaurantToPhoto.photoID
profileID int FK >- PROFILE.profileID
url

REVIEW
-----
reviewID PK int IDENTITY
rating
comment
likes
profileID int FK >- PROFILE.profileID

restaurantToPhoto
-----
restaurantToPhotoID pk int IDENTITY
restaurantID int FK >- RESTAURANT.restaurantID
photoID int


reviewToPhoto
-----
reviewToPhotoID PK int IDENTITY
photoID int FK >- PHOTO.photoID
reviewID int FK >- REVIEW.reviewID```
