const express = require('express');
const bodyParser = require('body-parser');
require('newrelic');

const reviewsRouter = require('./controllers/reviews.js');
const userRouter = require('./controllers/users.js');
const featuresRouter = require('./controllers/features.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//routes
app.use('/api/:listingid/reviews', (req, res, next) => {
  req.listingid = req.params.listingid;
  next();
}, reviewsRouter);

app.use('/api/:listingid/features', (req, res, next) => {
  req.listingid = req.params.listingid;
  next();
}, featuresRouter);

app.use('/api/users', userRouter);


const PORT = 3000;
app.listen(PORT);
console.log('listening on port 3000');