import axios from "axios";

export default {

   // Search Google Books for the term provided 
  getUser: (query) => {
    return axios.get("/api/login/signin", query);
  },
  // Deletes a book from the database
  deleteBook: function(id) {
    console.log("Delete of ID requested: " + id);
    return axios.delete("/api/books/" + id);
  },
  // Gets all saved books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("Bookdata = " + JSON.stringify(bookData));
    return axios.post("/api/books", bookData);
  }
};
