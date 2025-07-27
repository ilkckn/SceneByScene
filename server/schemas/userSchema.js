import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    image: {
      type: String,
      default:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671138.jpg?t=st=1744816231~exp=1744819831~hmac=dc6a1669707e8e09b0e01be15baa665bf3b20a4d4fb4a0845d212074e7362efc&w=900",
    },
    age: {
      type: Number,
      min: 0,
      max: 120,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
