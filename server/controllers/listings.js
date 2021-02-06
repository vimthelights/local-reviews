const express = require('express');
const { getById, getReviews, post, patch, remove } = require('../models/listings.js');

const router = express.Router();
router.get('/', (req, res) => {
  const { listingid } = req;
  getById(listingid, (err, listing) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(listing);
    }
  })
});
router.get('/reviews', (req, res) => {
  console.log('in here');
  const { listingid } = req;
  getReviews(listingid, (err, reviews) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
});

router.post('/reviews', (req, res) => {
  const { listingid } = req;
  post(req.body, listingid, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send();
    }
  });
});

router.patch('/', (req, res) => {
  const { listingid } = req.params;
  console.log(req.body);
  patch(req.body, listingid, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send();
    }
  });
});

module.exports = router;