const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 50,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      min: 3,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 4,
      required: true,
    },
    profile_pic: {
      type: String,
      default: "",
    },
    covers_pic: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    from: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },

    desc: {
      type: String,
      max: 100,
    },
    relation: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
