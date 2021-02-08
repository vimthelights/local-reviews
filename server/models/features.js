const {pool, patch} = require('../../database');

module.exports = {
  get: (listingid, cb) => {
    pool.query(`SELECT * from features where id_listing = ${listingid}`, (err, {rows}) => {
      if (err) {
        cb(err);
      } else {
        cb(null, rows);
      }
    });
  },
  post: ({feature_type, total_votes}, listingid, cb) => {
    const vals = [feature_type, total_votes, listingid];
    console.log(vals);
    pool.query('INSERT INTO features (feature_type, total_votes, id_listing) VALUES($1, $2, $3)', vals, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  },
  patch: (data, featureid, cb) => {
    patch(data, 'features', featureid, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  },
  remove: (featureid, cb) => {
    pool.query('DELETE FROM Features WHERE feature_id = $1' , [featureid], (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  }
};
