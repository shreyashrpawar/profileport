const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const detailUser = require("../models/userDetails");
const hostdetailmodule = require("../models/hostdetails");
const axios = require("axios");
const { PDFDocument, rgb } = require('pdf-lib');

const generatepdf=('/generate-pdf', async (req, res) => {
  try {
    // Fetch user data from the database
    const userData = await detailUser.findOne({ sitename: req.body.userId });
    console.log(userData);
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add content to the PDF (e.g., name, title, about me)
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 30;
    // console.log(userData.name)
    // page.drawText(userData.name)
    const value=userData.name;
    console.log(value)
    page.drawText(value, {
      x: 50,
      y: height - 50,
      size: fontSize,
      color: rgb(0, 0, 0),
    });

    // Add other user data to the PDF

    // Serialize the PDF to a buffer
    const pdfBytes = await pdfDoc.save();

    // Send the PDF as a response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=custom_resume.pdf');
       
    res.send(pdfBytes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating PDF');
  }
});


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
    res.status(200).json({ message: user,token });
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
    const user = await User.login(email, password,false);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const googleloginUser = async (req, res) => {
  const { accessToken } = req.body;
  let user;
  try {
   
      const response = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
        const email = response.data.email;
        const id = response.data.id;
         user = await User.login(email, id, true);
    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const googlesignupUser = async (req, res) => {
  console.log("this is google access token");
    const { accessToken } = req.body;
    try {
      //const user = await User.Googlesignup(accessToken);

        const response = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        });
        console.log(response.data.id);
        const email = response.data.email;
        const id = response.data.id;
        const existingUser =  await User.findOne({email})
      
              if (existingUser) 
                  return res.status(400).json({message: "User already exist!"})
              
                  const user = User.create({ email, password: id })
              const token = createToken(user._id);
      res.status(200).json({ email, token });
      } 
    
     catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
// signup a user
const signupUser = async (req, res) => {
  
  const { email, password } = req.body;
    console.log(email, password+"this is email and password");
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
  googlesignupUser,
  googleloginUser, generatepdf
};
