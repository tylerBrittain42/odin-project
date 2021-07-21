# Members Only Outline
This is a rough plan of attack for the *Member's Only* project featured on the odin project. Since the material covered authentication, the focus will be on the backend and the majority of the front end will be reusing bootstrap templates and examples.
# Models
## User
- username
- password (hashed)
- membership status
## Message
- title
- timestamp
- body
- author

# Pages
- Sign up page
- Passcode Page (to upgrade membership)
- Login page
- Compose message page
- View feed (with user/non user views using ejs)

# Routes and Controllers
## Index
- */* - feed (**messageController** GET)
## Account
- */login* - login page (**userController** GET and **userController** POST)
- */Sign-up* - signup for acct (**userControllerGET** and **userControllerPOST**)
- */Upgrade* - passcode page to upgrade account (**userControllerGET** and **userControllerPOST**)
## Compose
- */* - page to create a message (**messageController** GET and **messageController** POST)
# After Rough implementation
1. Add in passport authentication
1. Fix feed ejs (make hidden when not logged in)
1. Hash stored passwords
1. Fix author in a compose message
1. Add logout route and controller
# Maybe
- Sanitize and validate
- Upgrade membership