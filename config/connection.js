const {Pool} = require('pg');

const pool = new Pool( {
  host: 'localhost',
  user: 'postgres',
  database: 'postgres',
  password: 'password',
  port: 5432

})

module.exports = pool;
