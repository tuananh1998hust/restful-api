// config dotenv
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// users Router
const usersRouter = require('./routes/users.routes');

const app = express();

// bodyParser Middleware
app.use(bodyParser.json());

// connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Mongo DB is connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 3000;

app.use('/api/users', usersRouter);

app.listen(port, () => console.log(`server is start on port ${port}`));