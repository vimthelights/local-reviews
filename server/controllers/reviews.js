const express = require('express');
const { get, post, patch, remove } = require('../models/reviews.js');
const router = express.Router();

router.get('/', (req, res) => {
  const { listingid } = req;
  get(listingid, (err, reviews) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
});

router.post('/', (req, res) => {
  const { listingid } = req;
  post(req.body, listingid, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send();
    }
  });
});

router.patch('/:reviewid', (req, res) => {
  const { reviewid } = req.params;
  console.log(reviewid);
  console.log(req.body);
  patch(req.body, reviewid, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send();
    }
  });
});

router.delete('/:reviewid', (req, res) => {
  const { reviewid } = req.params;
  console.log(reviewid);
  remove(reviewid, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;
