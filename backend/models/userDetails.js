const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DetailsUser = new Schema({
  admin: {
    type: String,
    required: true,
    unique: true,
  },
  sitename: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  selectedTheme: {
    type: String,
    required: true,
  },
});

const hostDetails = new Schema({
  admin: {
    type: mongoose.Schema.Types.String,
    ref: "DetailsUser",
  },
  sitename: {
    type: String,
    required: true,
  },
  host: {
    type: Boolean,
    required: true,
  },
});

DetailsUser.statics.hosteddata = async function (siteid) {
  console.log(siteid);
  const exists = await this.findOne({ sitename: siteid });
  console.log(exists);
  if (exists) {
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

  const exists = await this.findOne({ admin });

  if (exists) {
    exists.sitename = sitename;
    exists.name = name;
    exists.email = email;
    exists.address = address;
    exists.phone = phone;
    exists.selectedTheme = selectedTheme;
    await exists.save();
    return exists;
  } else {
    const userdetail = await this.create({
      admin,
      sitename,
      name,
      email,
      address,
      phone,
      selectedTheme,
    });
    return userdetail;
  }
};

hostDetails.statics.hostit = async function (admin, sitename, host) {
  if (!admin || !sitename || !host) {
    throw Error("All fields must be filled");
  }

  const exists = await this.findOne({ admin });

  if (exists) {
    throw Error("record already exists");
  }

  const userdetail = await this.create({
    admin,
    sitename,
    host,
  });
  return userdetail;
};

module.exports = mongoose.model("hostDetails", hostDetails);
module.exports = mongoose.model("DetailsUser", DetailsUser);
