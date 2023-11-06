const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getBooks,
  addBook,
  getBook,
  deleteBook,
  patchBook,
  putBook,
} = require("./controllers/myControllers");
// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes
// Define routes for the Books API
app.get("/api/books", getBooks);
app.post("/api/books", addBook);
app.get("/api/books/:id", getBook);
app.delete("/api/books/:id", deleteBook);
app.patch("/api/books/:id", patchBook);
app.put("/api/books/:id", putBook);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
