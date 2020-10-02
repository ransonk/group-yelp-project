const express = require('express');
const app = express();
const port = 8080;

const loginRouter = require('./routes/log-in')
const signupRouter = require('./routes/sign-up')
const searchRouter = require('./routes/search')


app.set('view engine', 'pug')
//home page
app.get('/', (req, res) => {
    res.render('home')
})

//login/signup/demo

app.get('/login/', (req, res) => {
    //redirects to home page as signed in user

})
app.get('/signup/', (req, res) => {
    //redirects to home page as signed in user

})


//search results
//sorted by category

app.get('/search/:id', (req, res) => {

})

//restaurant
app.get('/restaurant/:id(\\d+)', (req, res) => {

})

//user/profile
app.get('/user/:id(\\d+)', (req, res) => {

})

//write review
app.get('/write-a-review/:id(\\d+)', (req, res) => { })

app.post('/write-a-review/:id(\\d+)', (req, res) => {

})


// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.status = 404;
    next(err);
});

// Custom error handlers.

// Generic error handler.
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









app.listen(port, () => console.log(`Listening to port: ${port}`))
