const { Pool } = require('pg');

const pool = new Pool({
  database: 'reviews',
  user: 'remyorans',
  port: 5432,
});

const idNames = {
  reviews: 'review_id',
  listings: 'listing_id',
  users: 'user_id',
  features: 'feature_id',
};

module.exports = {
  pool,
  patch: (data, table, id, cb) => {
    console.log(data);
    const columns = Object.keys(data);
    const values = Object.values(data);
    const valueParams = values.map((value, index) => `$${index + 1}`);

    let queryString = `UPDATE ${table} SET (${columns.join(', ')}) = (${valueParams.join(', ')}) where ${idNames[table]} = ${id}`;
    console.log(queryString);
    pool.query(queryString, values, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  }
};
