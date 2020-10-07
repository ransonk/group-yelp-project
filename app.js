const express = require('express');
const app = express();
const morgan = require('morgan');
const environment = require('./config/index');
const apiUser = require('./routes/api/user');
const { ValidationError } = require("sequelize")
const path = require('path');
const session = require("express-session")
const sessionSecret = require("./config/index").sessionSecret.secret
// const loginRouter = require('./routes/log-in')
// const signupRouter = require('./routes/sign-up')
// const searchRouter = require('./routes/search')
// const restaurant = require('./routes/restaurant')
// const writeReview = require('./routes/write-a-review')
// const users = require('./routes/users')
const indexRouter = require('./routes/index')

app.use(morgan('dev'));
app.set('view engine', 'pug')
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
}));
app.use((req, res, next) => {
    let { history } = req.session;
    if (!history) {
        history = [];
        req.session.history = history;
    }
    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    if (!url.endsWith("js") && !url.endsWith("css") && !url.endsWith("jpg") && !url.endsWith("png") && !url.includes("api/")) {
        history.unshift(url);
    }
    next();
});
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use('/', indexRouter)
app.use('/api/user', apiUser);
// app.use('/login', loginRouter);
// app.use('/signup', signupRouter);
// app.use('/search', searchRouter)
// app.use('/restaurants', restaurant)
// app.use('/write-a-review', writeReview)
// app.use('/users', users)

app.use(require('./routes/api/restaurants'));


//login/signup/
//demo
//search results
//sorted by category
//restaurant
//user/profile
//write review
//comment





//home page
//just to make the main page works... will be changing later on.....


// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});


// Process sequelize errors
app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = "Sequelize Error";
        // console.log(err)
    }
    next(err);
});


// server error Generic Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    const isProduction = environment === "production";
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});



// app.listen(port, () => console.log(`Listening to port: ${port}`))

module.exports = app;
