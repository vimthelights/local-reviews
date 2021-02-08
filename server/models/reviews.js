const { pool , patch } = require('../../database');

module.exports = {
  get: (listingId, cb) => {
    pool.query('SELECT * FROM Reviews WHERE id_listing = $1', [listingId], (err, {rows}) => {
      if (err) {
        cb(err);
      } else {
        cb(null, rows);
      }
    });
  },

  post: ({category, created_at, message_body, likes, id_users }, listingid, cb) => {
    const vals = [category, created_at, message_body, likes, id_users, listingid];
    console.log(vals);
    pool.query('INSERT INTO reviews(category, created_at, message_body, likes, id_Users, id_Listing) VALUES($1, $2, $3, $4, $5, $6)', vals, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  },

  patch: (data, reviewid, cb) => {
    patch(data, 'reviews', reviewid, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  },

  remove: (reviewid, cb) => {
    pool.query('DELETE FROM Reviews WHERE review_id = $1', [reviewid], (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  }
};

// router.get('/:id', async (req, res) => {
//   const { id } = req.params
//   const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
//   res.send(rows[0])
// })

// category CHAR(20),
//   created_at TIMESTAMP,
//   message_body TEXT,
//   likes SMALLINT,
//   id_Users INTEGER,
//   id_Listing INTEGER,
//   FOREIGN KEY (id_Users) REFERENCES Users (user_id) ON DELETE CASCADE,
//   FOREIGN KEY (id_listing) REFERENCES Listings (listing_id) ON DELETE CASCADE