
### Backend Routes

|                Path                 | HTTP Verb |                      Meaning                           |
|-------------------------------------|-----------|--------------------------------------------------------|
| /api/users/token                    |   POST    |                   logs in user                         |
| /api/users                          |   POST    |                   logs in user                         |
| /api/users/id                       |   GET     |            gets user for user profile                  |
| /api/users/check                    |   POST    |            check if user is logged in                  |
| /api/users/image/edit               |   PATCH   |             edit user's profile image                  |
| /api/restaurants/                   |   POST    |      user lists their restaurant (create new)          |
| /api/restaurants/id                 |   GET     |          gets all specific restaurant data             |
| /api/restaurants/id                 |   DELETE  |              remove specific restaurant                |
| /api/restaurants/id/reviews         |   POST    |           create new review for restaurant             |
| /api/restaurants/id/reviews         |   DELETE  |     delete specific review if current user made it     |
| /api/restaurants/id/reviews         |   PUT     |           edit review if current user made it          |
| /api/restaurants/user/id/restaurant |   GET     |           gets specific restaurant by user ID          |
| /api/search/name/query              |   GET     |     gets restaurants that match the search query       |
| /api/search/dropdown/category       |   GET     | gets restaurants that match the selected food category |
| /api/search/services/type           |   GET     | gets restaurants that match the selected services type |