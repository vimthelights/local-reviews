const express = require('express');
const { get, post, patch, remove } = require('../models/users.js');

const router = express.Router();

router.get('/:userid', (req, res) => {
  console.log('in here');
  const { userid } = req.params;
  get(userid, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

router.post('/', (req, res) => {
  console.log('in post');
  post(req.body, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send();
    }
  });
});

router.patch('/:userid', (req, res) => {
  const { userid } = req.params;
  console.log(req.body);
  patch(req.body, userid, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send();
    }
  });
});

router.delete('/:userid', (req, res) => {
  const { userid } = req.params;
  console.log(userid);
  remove(userid, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;