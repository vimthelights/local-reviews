const db = require('../../database');

module.exports = {
  get: (listingId, cb) => {
    const reviews = db.query('SELECT * FROM Reviews WHERE id_listing = ?', [listingId], (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    })
  },
  post: (data, cb) => {

  },
  patch: (data, cb) => {

  },
  remove: (cb) => {

  }
};


// router.get('/:id', async (req, res) => {
//   const { id } = req.params
//   const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
//   res.send(rows[0])
// })