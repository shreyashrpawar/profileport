const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const detailUser = require("../models/userDetails");
const hostdetailmodule = require("../models/hostdetails");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
const hostdetails = async (req, res) => {
  const { admin, sitename, host } = req.body;

  try {
    const user = await hostdetailmodule.hostit(admin, sitename, host);

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
    res.status(200).json({ message: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const gethosting = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const user = await hostdetailmodule.gethosts(email);
    console.log(user);
    // create a token
    const token = createToken(user._id);
    res.status(200).json({ message: user });
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
    console.log(user);
    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateData = async (req, res) => {
  const {
    siteid,
    name,
    email,
    address,
    phone,
    proftitle,
    bio,
    skill1,
    skill2,
    skill1info,
    skill2info,
    project1title,
    project2title,
    project1description,
    project2description,
  } = req.body;

  try {
    const user = await detailUser.updateData(
      siteid,
      name,
      email,
      address,
      phone,
      proftitle,
      bio,
      skill1,
      skill2,
      skill1info,
      skill2info,
      project1title,
      project2title,
      project1description,
      project2description
    );
    console.log(user);
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
  updateData,
  gethosting,
};
