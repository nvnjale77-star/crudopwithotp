import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
    },

    verification: {
      type: Boolean,
      default: false,
    },

    otp: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

let userModel = mongoose.model("user", userSchema);

export default userModel;
