const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const detailUser = require("../models/userDetails");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
const hostdetails = async (req, res) => {
  const { admin, sitename, host } = req.body;

  try {
    const user = await detailUser.hostit(admin, sitename, host);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ sitename, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const gethostingdata = async (req, res) => {
  const { siteid } = req.body;
  console.log(siteid);
  try {
    const user = await detailUser.hosteddata(siteid);
    console.log(user);
    // create a token
    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const detailsUser = async (req, res) => {
  const { admin, sitename, name, email, address, phone, selectedTheme } =
    req.body;

  try {
    const user = await detailUser.detailsUser(
      admin,
      sitename,
      name,
      email,
      address,
      phone,
      selectedTheme
    );

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
  detailsUser,
  hostdetails,
  gethostingdata,
};
