const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DetailsUser = new Schema({
  sitename: {
    type: String,
    required: true,
    unique: true,
  },
  main: {
    type: String,
    unique: false
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  selectedTheme: {
    type: String,
  },
  proftitle: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  skill1: {
    type: String,
    required: false,
  },
  skill2: {
    type: String,
    required: false,
  },
  skill1info: {
    type: String,
    required: false,
  },
  skill2info: {
    type: String,
    required: false,
  },
  project1title: {
    type: String,
    required: false,
  },
  project2title: {
    type: String,
    required: false,
  },
  project1description: {
    type: String,
    required: false,
  },
  project2description: {
    type: String,
    required: false,
  },
});

DetailsUser.statics.hosteddata = async function (siteid) {
  console.log(siteid);
  const exists = await this.findOne({ sitename: siteid });
  if (exists) {
    return exists;
  } else {
    throw Error("record not found");
  }
};

DetailsUser.statics.updateData = async function (
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
) {
  const exists = await this.findOne({ sitename: siteid });
  if (exists) {
    exists.name = name;
    exists.email = email;
    exists.address = address;
    exists.phone = phone;
    exists.proftitle = proftitle;
    exists.bio = bio;
    exists.skill1 = skill1;
    exists.skill2 = skill2;
    exists.skill1info = skill1info;
    exists.skill2info = skill2info;
    exists.project1title = project1title;
    exists.project2title = project2title;
    exists.project1description = project1description;
    exists.project2description = project2description;
    await exists.save();
    return exists;
  } else {
    throw Error("record not found");
  }
};

DetailsUser.statics.detailsUser = async function (
  admin,
  sitename,
  name,
  email,
  address,
  phone,
  selectedTheme
) {
  if (
    !admin ||
    !sitename ||
    !name ||
    !email ||
    !address ||
    !phone ||
    !selectedTheme
  ) {
    throw Error("All fields must be filled");
  }

  // const exists = await this.findOne({ admin });

  // if (exists) {
  //   exists.sitename = sitename;
  //   exists.name = name;
  //   exists.email = email;
  //   exists.address = address;
  //   exists.phone = phone;
  //   exists.selectedTheme = selectedTheme;
  //   await exists.save();
  //   return exists;
  // } else {
  const userdetail = await this.create({
    sitename,
    admin,
    name,
    email,
    address,
    phone,
    selectedTheme,
  });
  return userdetail;
};

module.exports = mongoose.model("DetailsUser", DetailsUser);
