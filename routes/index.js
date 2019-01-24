const path = require("path");
const router = require("express").Router();
const calendarController = require("../controllers/calendarController");
const taskController = require("../controllers/taskController");
const loginController = require("../controllers/loginController");
// const apiRoutes = require("./api");


// API Routes
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
  .post(loginController.verify);


// Matches with "/api/logout"
router
  .route("/api/logout")
  .post(loginController.logout);


// Matches with "/api/addEvent"
router
  .route("/api/addEvent")
  .post(calendarController.addEvent);


// Matches with "/loadEvents"
router
  .route("/loadEvents")
  .get(calendarController.loadEvents);


// Matches with "/api/chgDate"
router
  .route("/api/chgEvent")
  .post(calendarController.chgEvent);


// Matches with "/api/deleteEvent"
router
.route("/api/deleteEvent")
.post(calendarController.deleteEvent);


// Matches with "/api/deleteEvent"
router
.route("/api/addCard")
.post(taskController.addCard);


  // If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;