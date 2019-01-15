const { Pool } = require('pg');
const db_config = require('./secrets/db_configuration');

// Primary way to interact with Postgres DB
const pool = new Pool(db_config);

module.exports = pool;
