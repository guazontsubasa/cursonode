const admin = (req, res, next) => {  
  if (req.body.isValid) {
    next();
  } else {
    console.log('---------------------xxx---------------------');
    console.log(req);
    res.status(403).send(`No eres administrador, no tienes accesos a ${req.originalUrl}`);
  }  
};

const isValid = { admin };

module.exports = isValid;