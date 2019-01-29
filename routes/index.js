const path = require("path");
const router = require("express").Router();
const calendarController = require("../controllers/calendarController");
const cardController = require("../controllers/cardController");
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


// Matches with "/api/addCard"
router
.route("/api/addCard")
.post(cardController.addCard);


// Matches with "/api/addCol"
router
.route("/api/addCol")
.post(cardController.addColumn);


router
  .route("/loadCards")
  .get(cardController.loadCards);


// Matches with "/getCols"
router
.route("/getCols")
.get(cardController.listCols);


// Matches with "/loadCards"
router
.route("/loadCards/:column")
.get(cardController.loadCards);


// Matches with "/getCard/:id"
router
.route("/getCard/:id")
.get(cardController.getCard);


// Matches with "/api/moveCard"
router
.route("/api/moveCard")
.post(cardController.advanceCard);


// Matches with "/api/editCard"
router
.route("/api/editCard")
.post(cardController.editCard);


// Matches with "/api/editCard"
router
.route("/api/closeCard")
.post(cardController.closeCard);


// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;