const User = require('../models/user.model');

async function login() {
  User.findOne({ email: req.body.user.email })
    .then(async user => {
      if (!user) {
        const newUser = new User({ email: req.body.user.email })
        newUser.save()
          // .then(user => {
          //   res.status(200).json({ token: generateToken(user), admin: false })
          // })
          // .catch(error => {
          //   res.status(500).json(error)
          // })
      }
  })
}

function generateToken(user) {
  return jwt.sign({ data: user }, process.env.TOCKEN_SECRET || "", { expiresIn: 60 * 60 * 10 })
}