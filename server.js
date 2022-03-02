const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport')
const session = require("express-session");
const pgSession = require('connect-pg-simple')(session)
const api = require('./backend/routes/routes')
const pgPool = require('./backend/config/db').pool
require('dotenv').config()
require('./backend/config/passport')

const app = express();
const port = process.env.port || 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());
app.use(session({
  store: new pgSession({
    pool : pgPool,
    tableName: "session"
  }),
  secret : "secret",
  resave : false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
  saveUninitialized : true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(api)

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });

app.listen(port, ()=> console.log(`PORT: ${port}`))