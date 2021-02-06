const db = require('../../database');

module.exports = {
  get: (userid, cb) => {
    console.log('in here');
    db.query(`SELECT * from users where user_id = ${userid}`, (err, {rows}) => {
      if (err) {
        cb(err);
      } else {
        cb(null, rows);
      }
    });
  },
  post: ({password_, username, thumbnail_url, neighborhood_resident, email, home_address, city, zip, state_, country}, cb) => {
    const vals = [password_, username, thumbnail_url, neighborhood_resident, email, home_address, city, zip, state_, country];
    console.log(vals);
    db.query('INSERT INTO users (password_, username, thumbnail_url, neighborhood_resident, email, home_address, city, zip, state_, country) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', vals, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  },
  patch: (data, userid, cb) => {
    console.log(data);
    const columns = Object.keys(data);
    const values = Object.values(data);
    const valueParams = values.map((value, index) => `$${index + 1}`);
    let queryString = `UPDATE users SET (${columns.join(', ')}) = (${valueParams.join(', ')}) where user_id = ${userid}`;
    console.log(queryString);
    db.query(queryString, values, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  },
  remove: (userid, cb) => {
    db.query('DELETE FROM Users WHERE user_id = $1', [userid], (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  }
};

// post: ({category, created_at, message_body, likes, id_users, id_listing }, listingId, cb) => {
//   const vals = [category, created_at, message_body, likes, id_users, listingId];
//   db.query('INSERT INTO reviews(category, created_at, message_body, likes, id_Users, id_Listing) VALUES($1, $2, $3, $4, $5, $6)', vals, (err, results) => {
//     if (err) {
//       cb(err);
//     } else {
//       cb(null, results);
//     }
//   });
// },

// CREATE TABLE IF NOT EXISTS Users (
//   user_id SERIAL PRIMARY KEY,
//   password_ CHAR(30),
//   username CHAR(35),
//   thumbnail_url CHAR(103),
//   neighborhood_resident boolean,
//   email CHAR(45),
//   home_address CHAR(40),
//   city CHAR(50),
//   zip CHAR(10),
//   state_ CHAR(2),
//   country CHAR(50)
// );
