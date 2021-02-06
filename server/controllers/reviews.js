const express = require('express');
const { get, post, patch, remove } = require('../models/reviews.js');
const router = express.Router();

router.get('/:listingId', (req, res) => {
  const { listingiId } = req.params;
  get(listingId, (err, reviews) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
});

router.post((req, res) => {
  post(req.body, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send();
    }
  })
});

router.patch('/:reviewid', (req, res) => {
  const { reviewId } = req.params;
  patch(reviewId, req.body, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send();
    }
  })
});

router.delete('/:reviewid', (req, res) => {
  const { reviewId } = req.params;
  remove(reviewId, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).send();
    }
  });
});
