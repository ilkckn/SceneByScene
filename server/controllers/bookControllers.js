import Book from "../schemas/bookSchema.js";
import { CustomError } from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
});

export const getBookById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) {
    throw new CustomError("Book not found", 404);
  }
  res.status(200).json(book);
});

export const createBook = asyncHandler(async (req, res) => {
  const {
    title,
    author,
    genre,
    published_date,
    year,
    rating,
    country,
    description,
    cover_image,
  } = req.body;
  if (
    !title ||
    !author ||
    !genre ||
    !published_date ||
    !year ||
    !country ||
    !description
  ) {
    throw new CustomError("All fields are required", 400);
  }
  const existingBook = await Book.findOne({ title });
  if (existingBook) {
    throw new CustomError("Book already exists", 400);
  }
  const newBook = new Book({
    title,
    author,
    genre,
    published_date,
    year,
    rating,
    country,
    description,
    cover_image,
  });
  await newBook.save();
  res.status(201).json({ message: "Book created successfully", book: newBook });
});

export const updateBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    title,
    author,
    genre,
    published_date,
    year,
    rating,
    country,
    description,
    cover_image,
  } = req.body;
  const updateBook = {
    title,
    author,
    genre,
    published_date,
    year,
    rating,
    country,
    description,
    cover_image,
  };
  const updatedBook = await Book.findByIdAndUpdate(id, updateBook, {
    new: true,
    runValidators: true,
  });
  if (!updatedBook) {
    throw new CustomError("Book not found", 404);
  }
  res
    .status(200)
    .json({ message: "Book updated successfully", book: updatedBook });
});

export const deleteBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedBook = await Book.findByIdAndDelete(id);
  if (!deletedBook) {
    throw new CustomError("Book not found", 404);
  }
  res
    .status(200)
    .json({ message: "Book deleted successfully", book: deletedBook });
});
