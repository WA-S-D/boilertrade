const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true } );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database successfully connected!");  
});

app.post('/login', function (req, res) {
    User.findOne({ email: req.body.user.email })
    .then(async user => {
      if (!user) {
        const newUser = new User({ email: req.body.user.email })
        newUser.save()
      }
  })
});

app.listen(port);