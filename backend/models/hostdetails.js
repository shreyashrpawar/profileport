const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hostDetails = new Schema({
  admin: {
    type: String,
    required: true,
  },
  sitename: {
    type: mongoose.Schema.Types.String,
    ref: "DetailsUser",
  },
  host: {
    type: Boolean,
    required: true,
  },
});

hostDetails.statics.gethosts = async function (email) {
  const user = await this.findOne({ admin: email });
  console.log(user);
  return user;
};

hostDetails.statics.hostit = async function (admin, sitename, host) {
  if (!admin || !sitename) {
    throw Error("All fields must be filled");
  }

  const exists = await this.findOne({ sitename });

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
