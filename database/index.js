const { Pool } = require('pg');

const pool = new Client({
  database: 'testdb',
  user: 'sdc_user',
  password: 'Rem20769y',
  port: 5432,
});
client
  .connect()
  .then(() => console.log('connected to postgreSQL successfully!'))
  .catch((e) => console.log(e))

module.exports = {
  client,
};
