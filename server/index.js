const express = require('express');
const bodyParser = require('body-parser');
const { pool } = require('../database');
const path = require('path');
const compression = require('compression');
const reviewsRouter = require('./controllers/reviews.js');
const userRouter = require('./controllers/users.js');
const featuresRouter = require('./controllers/features.js');

const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/loaderio-0ec8c9bc50e9d41bacb9a4d93d44fafd.txt', express.static(path.join(__dirname, '..', 'loaderio-0ec8c9bc50e9d41bacb9a4d93d44fafd.txt')));

app.get('/api/:listingid/reviews', (req, res) => {
  console.log('getting');
  const { listingid } = req.params;
  pool.query('SELECT * FROM reviews WHERE id_listing = $1', [listingid], (err, {rows}) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(rows);
    }
  });
});

app.post('/api/:listingid/reviews', (req, res) => {
  const { listingid } = req.params;
  const { category, created_at, message_body, likes, id_users } = req.body;
  const vals = [category, created_at, message_body, likes, id_users, listingid];
  pool.query('INSERT INTO reviews(category, created_at, message_body, likes, id_Users, id_Listing) VALUES($1, $2, $3, $4, $5, $6)', vals, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

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
console.log(`listening on port ${PORT}`);