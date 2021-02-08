const express = require('express');
const { get, post, patch, remove } = require('../models/features.js');

const router = express.Router();

router.get('/', (req, res) => {
  const { listingid } = req;
  get(listingid, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
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

router.patch('/:featureid', (req, res) => {
  const { featureid } = req.params;
  patch(req.body, featureid, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send();
    }
  });
});

router.delete('/:featureid', (req, res) => {
  const { featureid } = req.params;
  remove(featureid, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;