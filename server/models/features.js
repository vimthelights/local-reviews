const db = require('../../database');

module.exports = {
  get: (featureid, cb) => {
    db.query(`SELECT * from features where feature_id = ${featureid}`, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  },
  post: ({name, total_votes}, listingid, cb) => {
    const vals = [name, total_votes, listingid];
    pool.query('INSERT INTO features (name, total_votes, id_listing) VALUES($1, $2, $3)', vals, (err, results) => {
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
