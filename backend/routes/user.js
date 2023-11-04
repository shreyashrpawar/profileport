const express = require("express");

// controller functions
const { loginUser, signupUser,googlesignupUser, googleloginUser, generatepdf } = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);
router.post("/Googlesignup", googlesignupUser);
router.post("/Googlesignup", googlesignupUser);
router.post("/Googlelogin", googleloginUser);
router.post("/generatepdf", generatepdf);


// signup route

module.exports = router;
