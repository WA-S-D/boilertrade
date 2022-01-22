const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user.model');

var fs = require('fs');
var path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI || "");
const db = mongoose.connection;

db.on("error", (err) => { console.error(err) })
db.once("open", () => { console.log("DB started successfully") })

app.listen(port, () => {
    console.log("Server running...");
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
  
app.set("view engine", "ejs");

var multer = require('multer');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'image-uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

var imgModel = require('./models/image.model.js');

app.post('/login', async function (req, res) {
    User.findOne({ email: req.body.email })
    .then(async user => {
      if (!user) {
        const newUser = new User({ email: req.body.email })
        newUser.save()
        .then(user => {
            res.status(200).json({ "succes": "hi" })
          })
          .catch(error => {
            res.status(500).json(error)
          })
      }
    })
});

app.get('/post', (req, res) => {
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

app.post('/post', upload.single('image'), (req, res, next) => {
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/image-uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/post');
        }
    });
});