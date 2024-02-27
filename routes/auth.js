const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

const { registerValidation } = require("../validation");
const { application } = require("express"); 

// registration
router.post("/register", async (req, res) => {
    //code

    // validate user input (name, email, password)
    const { error  } = registerValidation(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    // check if the email is already registered

    const emailExist = await User.find({ email : req.body.email});

    if (emailExist){
        return res.status(400).json({ error : "Email already exixts" });
    }


    // hash the password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    // create a user object and save in the DB
    const userObject = new User({ 
        name : req.body.name , 
        email : req.body.email,
        password
     });

     try {
        const savedUser = await userObject.save();
        res.json({ error: null, data: savedUser._id });

     } catch (error) {
        res.status(400).json({ error })

     }

});
// /login
router.post("/login", (req, res)  => {
    //code
    return res.status(200).json({ msg: "Login route..." });
});
module.exports = router;