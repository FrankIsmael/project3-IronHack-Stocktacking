const express = require('express');
const router = express.Router();
const User = require('../models/user-model')
const passport = require('../handlers/passport')
const {hasAuth} = require('../handlers/middleWares') 

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, infoError) => {
    if (err) return res.status(500).json({ err, infoError })
    if (!user) return res.status(400).json({ msg: 'This user doesnt exists' })
    req.logIn(user, err => {
      if (err) res.status(500).json({ err })
      res.status(200).json(user)
    })
  })(req, res, next)
})

router.post('/signup', (req, res, next) => {
  User.register({ ...req.body }, req.body.password)
    .then(user => {
      req.logIn(user, err => {
        if (err) return res.status(500).send({ message: err.message });

        res.status(200).send(user);
      });
    })
    .catch(err => res.status(500).send({ message: err.message }));
});

router.get('/logout',(req, res, next) => {
  req.logout();
  res.status(200).send({ msg: 'Log out succes!'})
})

router.get('/loggedin', (req, res, next) => {
  if(req.isAuthenticated()){
    res.status(200).json(req.user)
    return 
  }
  res.status(403).send({message:'Unauthorized'});
});

module.exports = router;

/*
{
	"folio": "loquesea",
    "fechaDoc": "10/10/10",
    "CBB": "00000",
    "importe": 0,
    "proveedor": "5cdde4df0de453254e8d3a60",
    "articulos": ["nada","nada+1","nada+2"],
    "nota": "aqui no hay nada"
  }

  {
	"nombre": "IFM",
    "rfc": "yopi",
    "razonSocial": "caguamas",
    "direccion": "laChingada",
    "telefono": "puroFace"
  }
  */