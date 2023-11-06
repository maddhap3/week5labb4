const Book = require("../models/myModel"); // Replace with the actual path to your model file.

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add a new book
const addBook = async (req, res) => {
  try {
    const { title, author, publisher } = req.body;
    const newBook = new Book({ title, author, publisher });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ error: "Bad Request" });
  }
};

// Get a single book by ID
const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a book by ID using findOneAndReplace
const patchBook = async (req, res) => {
  try {
    const book = await Book.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a book by ID using findOneAndReplace
const putBook = async (req, res) => {
  try {
    const book = await Book.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getBooks,
  addBook,
  getBook,
  deleteBook,
  patchBook,
  putBook,
};
