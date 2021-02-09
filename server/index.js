const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
// require('newrelic');
const reviewsRouter = require('./controllers/reviews.js');
const userRouter = require('./controllers/users.js');
const featuresRouter = require('./controllers/features.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const pool = new Pool({
  database: 'reviews',
  user: 'remyorans',
  port: 5432,
});

//routes
app.get('/api/:listingid/reviews', (req, res) => {
  const { listingid } = req.params;
  pool.query('SELECT * FROM reviews WHERE id_listing = $1', [listingid], (err, {rows}) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(rows);
    }
  });
  // pool.query('SELECT * FROM reviews WHERE id_listing = $1', [listingid])
  // .then(({rows}) => {
  //   res.status(200).send(rows);
  // })
  // .catch(err => res.status(400).send(err));
});
// app.use('/api/:listingid/reviews', (req, res, next) => {
//   req.listingid = req.params.listingid;
//   next();
// }, reviewsRouter);

// app.use('/api/:listingid/features', (req, res, next) => {
//   req.listingid = req.params.listingid;
//   next();
// }, featuresRouter);

// app.use('/api/users', userRouter);


const PORT = 3000;
app.listen(PORT);
console.log('listening on port 3000');