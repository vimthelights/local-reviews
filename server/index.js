const express = require('express');
const bodyParser = require('body-parser');
const reviewsRouter = require('./controllers/reviews.js');
const userRouter = require('./controllers/users.js');
const listingsRouter = require('./controllers/listings.js');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes

app.use('/api/:listingid/reviews', (req, res, next) => {
  req.listingid = req.params.listingid;
  next();
}, reviewsRouter);
// app.use('/api/:listingid', (req, res, next) => {
//   req.listingid = req.params.listingid;
//   next();
// }, );
// app.use('/api/:listingid', listingRouter);
app.use('/api/users', userRouter);
// app.use('/api/:listingid/features', );

//



const PORT = 3000;
app.listen(PORT);
console.log('listening on port 3000');