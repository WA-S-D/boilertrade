const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');

var fs = require('fs');
var path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//we need to add our future domain here
const allowedOrigins = ['http://localhost:3000'];

const options = {
  origin: allowedOrigins,
  credentials: true
};

app.use(cors(options));
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

function generateToken(user) {
    return jwt.sign({ data: user }, process.env.TOCKEN_SECRET || "", { expiresIn: 60 * 60 * 10 })
}

app.post('/send', auth.isAuthorized, async function (req, res) {
    const accountSid = 'AC6b2ee063178041abde43c4828b172b9d'; 
    const authToken = '247ae13671449b9596f8facd8c8715e1'; 
    const client = require('twilio')(accountSid, authToken);

    const message =  req.body.user.email + " is interested in your product! Send them an email and ask if they want to buy!"

    client.messages 
        .create({ 
            body: message,  
            messagingServiceSid: 'MG63fe7557c7d6c432469b59ab7a42d8b3',      
            to: req.body.user.phone
        }) 
        .then(message => console.log(message.sid))
        .done();
})

app.post('/login', async function (req, res) {
    User.findOne({ email: req.body.user.email, instagram: req.body.user.instagram })
    .then(async user => {
        if (!user) {
            const newUser = new User({ email: req.body.user.email, instagram: req.body.user.instagram })
            newUser.save()
            .then(user => {
                res.status(200).json({ token: generateToken(user)})
            })
            .catch(error => {
                res.status(500).json(error)
            })
        } else {
            res.status(200).json({ token: generateToken(user)})
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
            res.send(items);
            //res.render('imagesPage', { items: items });
        }
    });
});

app.post('/post', upload.single('image'), (req, res, next) => {
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        email: req.body.email,
        phone: req.body.phone,
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

app.post('/delete', (req, res) => {
    const images = db.collection("images");
    images.deleteOne({"_id": new mongoose.Types.ObjectId(req.body.prod.id)})
        .then(result => {
            res.status(200).json({"success": "your product is deleted"})
        })
        .catch(err => console.error(err))
})