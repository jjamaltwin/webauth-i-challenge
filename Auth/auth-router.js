const express = require('express');
const router = express.Router();
const Users = require('./auth-model');
const bcrypt = require('bcrypt')


router.get("/", (req, res) => {
    res.send('Hello!');
});


// REGISTER
router.post("/register", (req,res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash ;
    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});


// LOGIN

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({username})
      .first()
      .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
          res.status(200).json({message: `Welcome ${user.username}!`});

        } else {
            res.status(400).json({message: "Invalid Credentials"});
        }  
           
      }) .catch(error => {
          res.status(500).json(error)
      });

});


// USERS


router.get("/users", (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    }) .catch( error => res.send(error));
    
});


module.exports = router;