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
