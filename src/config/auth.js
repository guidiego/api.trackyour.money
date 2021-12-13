const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const decoded = jwt.decode(req.headers.authorization, process.env.JWT_SECRET);
    req.owner = decoded.data.owner;
    next();
  } catch (e) {
    console.log(e)
    res.status(401).json({ message: 'Invalid Token'});
  }
}
