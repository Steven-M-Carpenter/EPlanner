import axios from "axios";

export default {

   // Perform a user find operation
  getUser: (query) => {
    return axios.post("/api/signin", query);
  },
    // Perform a user create operation
  createUser: (query) => {
    return axios.post("/api/signup", query);
  },  
  // Perform a check of the user's session key
  checkAuth: function(query) {
    console.log("Query in API = " + JSON.stringify(query));
    return axios.post("/api/verify", query);
  },
    // Perform a load of event for use in the calendar
  loadEvents: () => {
    return axios.get("/loadEvents");
  },
  // Perform a create of an event related to a calendar action
  createEvent: (query) => {
    return axios.post("/api/addEvent", query);
  },
  // Perform a date change for existing event 
  chgEvent: (query) => {
    return axios.post("/api/chgEvent", query);
  },
  // Perform a date change for existing event 
  deleteEvent: (query) => {
    return axios.post("/api/deleteEvent", query);
  },
  createCard: (query) => {
    return axios.post("/api/addCard", query);
  },
  createColumn: (query) => {
    return axios.post("/api/addCol", query);
  },
  getCols: () => {
    return axios.get("/getCols");
  },
  loadCards: (column) => {
    return axios.get("/loadCards/" + column);
  },
  getCard: (id) => {
    return axios.get("/getCard/" + id);
  },
  moveCard: (query) => {
    return axios.post("/api/moveCard", query);
  },
  editCard: (query) => {
    return axios.post("/api/editCard", query);
  },
  closeCard: (query) => {
    return axios.post("/api/closeCard", query);
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
