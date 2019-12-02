const express = require('express');

// use process.env variables to keep private variables
require('dotenv').config();

// Express Middleware
const helmet = require('helmet'); // Creates headers that protect from attacks (security)
const bodyParser = require('body-parser'); // turns response into usable format
const cors = require('cors') // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests

// db connection w/ localhost
var db = require('knex')({
    client: 'pg',
    connection: {
      port: POSTGRES_HOST_PORT=8765,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  });

// Controllers - aka, the db queries
const main = require('./controller/main')

// App
const app = express();

// App Middleware 
const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('combined'))

// App Routes - Auth
app.get('/', (req, res) => res.send('hello world'))
app.get('/crud', (req, res) => main.getTableData(req, res, db))
app.post('/crud', (req, res) => main.postTableData(req, res, db))
app.put('/crud', (req, res) => main.putTableData(req, res, db))
app.delete('/crud', (req, res) => main.deleteTableData(req, res, db))

// App Server Connection
const PORT = 8080;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));