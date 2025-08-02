import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 100,
    },
    author: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 100,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    published_date: {
      type: Date,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      min: 1450, // The year the printing press was invented
      max: new Date().getFullYear(), // Current year
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    cover_image: {
      type: String,
      default:
        "https://img.freepik.com/free-psd/3d-illustration-book-cover-mockup_23-2150671138.jpg?t=st=1744816231~exp=1744819831~hmac=dc6a1669707e8e09b0e01be15baa665bf3b20a4d4fb4a0845d212074e7362efc&w=900",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        if (ret.published_date) {
          ret.published_date = ret.published_date.toISOString().split("T")[0]; // "YYYY-MM-DD"
        }
        return ret;
      },
    },
  }
);

export default model("Book", bookSchema);
