const { pool, patch } = require('../../database');

module.exports = {
  getById: (listingid, cb) => {
    pool.query('SELECT * FROM Listings where listing_id = $1', [listingid], (err, {rows}) => {
      if (err) {
        cb(err);
      } else {
        cb(null, rows);
      }
    })
  },
  getReviews: (listingid, cb) => {
    pool.query('SELECT * FROM Reviews WHERE id_listing = $1', [listingid], (err, {rows}) => {
      if (err) {
        cb(err);
      } else {
        cb(null, rows);
      }
    });
  },
  post: ({category, created_at, message_body, likes, id_users }, listingid, cb) => {
    const vals = [category, created_at, message_body, likes, id_users, listingid];
    pool.query('INSERT INTO reviews(category, created_at, message_body, likes, id_Users, id_Listing) VALUES($1, $2, $3, $4, $5, $6)', vals, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  },
  patch: (data, listingid, cb) => {
    patch(data, 'listings', 'listingid', (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    })
  },
  delete: () => {

  },
}

// patch: (data, table, id, cb) => {
//   console.log(data);
//   const columns = Object.keys(data);
//   const values = Object.values(data);
//   const valueParams = values.map((value, index) => `$${index + 1}`);

//   let queryString = `UPDATE ${table} SET (${columns.join(', ')}) = (${valueParams.join(', ')}) where ${idNames[table]} = ${reviewid}`;
//   console.log(queryString);
//   pool.query(queryString, values, (err, results) => {
//     if (err) {
//       cb(err);
//     } else {
//       cb(null, results);
//     }
//   });
// }