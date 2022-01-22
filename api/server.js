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

<<<<<<< HEAD
app.listen(port, () => {
    console.log("Server running...");
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
  
app.set("view engine", "ejs");

var multer = require('multer');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

var imgModel = require('./model');
=======
app.post('/login', function (req, res) {
    User.findOne({ email: req.body.user.email })
    .then(async user => {
      if (!user) {
        const newUser = new User({ email: req.body.user.email })
        newUser.save()
      }
  })
});
>>>>>>> e5328198c69b99f033572742ba3707879847ec9a

app.get('/', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});