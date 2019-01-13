const path = require("path");
const router = require("express").Router();
const booksController = require("../controllers/booksController");
// const apiRoutes = require("./api");

// API Routes


// Matches with "/api/books"
// router
//   .route("/api/books")
//   .get(booksController.findAll)
//   .post(booksController.create);


// // Matches with "/api/books/:id"
// router
//   .route("/api/books/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);


// Matches with "/api/signup"
router
  .route("/api/signup")
  .post(loginController.signUp);


// Matches with "/api/signin"
router
  .route("/api/signin")
  .post(loginController.signIn);


// Matches with "/api/verify"
router
  .route("/api/verify")
  .get(loginController.verify);


// Matches with "/api/logout"
router
  .route("/api/logout")
  .get(loginController.logout);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;