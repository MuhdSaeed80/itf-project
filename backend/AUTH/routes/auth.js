const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation} = require('../validation');



router.post('/register', async (req, res) => {

    //validate the data 
    const{ error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exist');

    //Hash passwords
    const salt = await bcrypt.gentSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);



    //create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
//     try{
//         const savedUser = awiat user.save();
//         res.send(savedUser);
//     }
//     catch(err){
//         res.status(400).send(err);
//     }
});

//Login
router.post('/login', async (req,res) => {
    //validate the data 
    const{ error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //checking if email exist
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email is not found');
    
    //if password is correct
    // const validPass = awiat bcrypt.compare(req.body.password, user.password);
    // if(!validPass) return res.status(400).send('Invalid password');
    
    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
    res.send('Loggedin')

});



module.exports = router;