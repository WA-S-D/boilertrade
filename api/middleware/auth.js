const jwt = require('jsonwebtoken');

module.exports.isAuthorized = function(req, res, next) {
  const token = req.body.token;
  if (!token) {
    res.status(403).json({ error: "please log in" });
    return;
  } else {
    jwt.verify(token, process.env.TOCKEN_SECRET || "", (err, value) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'failed to authenticate token' })
        return;
      } else {
        return next();
      }
    })
  }
}