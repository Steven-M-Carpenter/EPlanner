const db = require("../models");
const Card = require("../models/Card");
const Column = require("../models/Column");
// const UserSession = require("../models/UserSession")

// Defining methods for the loginController
module.exports = {

  //************************************************************/
  //* Add a new card the the database
  //************************************************************/
  addCard: (req, res) => {
    console.log("body = " + JSON.stringify(req.body));

    const { body } = req;
    const {
      title,
      desc,
      start,
      end,
      steps,
      lane,
      column,
    } = body;


    if (!title) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify a title for the event.'
      });
    };
    if (!start) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify a start date/time.'
      });
    };
    if (!end) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify an end date/time.'
      });
    };
    if (!lane) {
      return res.send({
        success: false,
        message: 'ERROR: You must include the assigned lane.'
      });
    };
    if (!column) {
      return res.send({
        success: false,
        message: 'ERROR: You must include the assigned column.'
      });
    };

    console.log("passed all the checks and trying to add...");
    const newCard = new Card();
    newCard.title = title;
    newCard.desc = desc;
    newCard.start = start;
    newCard.end = end;
    newCard.steps = steps;
    newCard.lane = lane;
    newCard.column = column;
    newCard.save((err, card) => {
      if (err) {
        return res.send({
          success: false,
          message: 'ERROR:  Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Card saved!'
      });
    });
  },


  //************************************************************/
  //* Add a new column
  //************************************************************/
  addColumn: (req, res) => {
    console.log("body = " + JSON.stringify(req.body));

    const { body } = req;
    const {
      columnName,
      dispOrder,
    } = body;


    if (!columnName) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify a columnName.'
      });
    };
    if (!dispOrder) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify a display order number.'
      });
    };


    console.log("passed all the checks and trying to add...");
    const newColumn = new Column();
    newColumn.columnName = columnName;
    newColumn.dispOrder = dispOrder;
    newColumn.save((err, column) => {
      if (err) {
        return res.send({
          success: false,
          message: 'ERROR:  Record not added due to processing error.'
        });
      }
      return res.send({
        success: true,
        message: 'Column saved!'
      });
    });
  },


  //************************************************************/
  //* Load all cards
  //************************************************************/
  getCard: (req, res) => {
    db.Card
      .find({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //************************************************************/
  //* Load all cards
  //************************************************************/
  loadCards: (req, res) => {
    db.Card
      .find({ isDeleted: false, isClosed: false, isArchived: false, column: req.params.column })
      .sort({ start: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //************************************************************/
  //* Load all Columns
  //************************************************************/
  listCols: (req, res) => {
    db.Column
      .find({ isDeleted: false })
      .sort({ dispOrder: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //************************************************************/
  //* Move a card between columns
  //************************************************************/
  advanceCard: (req, res) => {
    // console.log("Request Body = " + JSON.stringify(req.body));
    db.Card
      .findOneAndUpdate({ _id: req.body.id },
        { $set: { column: req.body.newColumn } },
        null,
        (err, event) => {
          if (err) {
            return res.send({
              success: false,
              message: "ERROR:  Unable to alter the requested record."
            });
          };
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },



  editCard: (req, res) => {
    console.log("Request Body = " + JSON.stringify(req.body));
    db.Card
      .findOneAndUpdate({ _id: req.body.id },
        { $set: {
          title: req.body.title,
          desc: req.body.desc,
          start: req.body.start,
          end: req.body.end,
          column: req.body.column,
          isDeleted: req.body.isDeleted,
          isClosed: req.body.isClosed,
          isArchived:req.body.isArchived,
          steps: req.body.steps 
        } },null,
        (err, event) => {
          if (err) {
            return res.send({
              success: false,
              message: "ERROR:  Unable to alter the requested record."
            });
          };
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  closeCard: (req, res) => {
    console.log("Request Body = " + JSON.stringify(req.body));
    db.Card
      .findOneAndUpdate({ _id: req.body.id },
        { $set: {
          isClosed: req.body.isClosed
        } },null,
        (err, event) => {
          if (err) {
            return res.send({
              success: false,
              message: "ERROR:  Unable to alter the requested record."
            });
          };
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //************************************************************/
  //* remove all steps from cards before add
  //************************************************************/
  Steps: (req, res) => {
    db.Card
      .child.remove()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //************************************************************/
  //* Load all events
  //************************************************************/
  // loadEvents: (req, res) => {
  //   db.Event
  //     .find({ isDeleted: false })
  //     .sort({ start: 1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


  //************************************************************/
  //* Modify events as directed
  //************************************************************/
  chgCard: (req, res) => {
    // console.log("Request Body = " + JSON.stringify(req.body));
    // db.Event
    //   // .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, req.body)
    //   .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, 
    //   // .findByIdAndUpdate({ _id: req.body.id },
    //     {
    //       $set: {
    //         title: req.body.title,
    //         start: req.body.start,
    //         end: req.body.end
    //       }
    //     }, null,
    //     (err, event) => {
    //       if (err) {
    //         return res.send({
    //           success: false,
    //           message: "ERROR:  Unable to alter the requested record."
    //         });
    //       } 
    //     }
    //   )
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },

  //   Event.findOneAndUpdate({ _id: eventID, isDeleted: false }, { $set: { isDeleted: true }}, null, 

  //************************************************************/
  //* Delete events when prompted to do so
  //************************************************************/
  deleteCard: (req, res) => {
    // console.log("Request Body = " + JSON.stringify(req.body));
    // db.Event
    // // .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, req.body)
    // .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, 
    // // .findByIdAndUpdate({ _id: req.body.id },
    //   {
    //     $set: {
    //       isDeleted: true
    //     }
    //   }, null,
    //   (err, event) => {
    //     if (err) {
    //       return res.send({
    //         success: false,
    //         message: "ERROR:  Unable to alter the requested record."
    //       });
    //     } 
    //   }
    // )
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));

  },

  // //************************************************************/
  // //* Process user Sign-in and create auth token for them
  // //************************************************************/
  // signIn: (req, res) => {
  //   console.log("body = " + JSON.stringify(req.body));
  //   const { body } = req;
  //   const { password } = body;
  //   let { email } = body;

  //   console.log("email = " + email + "  password = " + password);

  //   if (!email) {
  //     return res.send({
  //       success: false,
  //       message: 'ERROR: You must specify an email address.'
  //     });
  //   };
  //   if (!password) {
  //     return res.send({
  //       success: false,
  //       message: 'ERROR: You must specify a password.'
  //     });
  //   };
  //   email = email.toLowerCase();


  //   User.find({
  //     email: email
  //   }, (err, users) => {
  //     console.log("Found user = " + users);
  //     if (err) {
  //       return res.send({
  //         success: false,
  //         message: 'ERROR:  Server error'
  //       });
  //     };
  //     if (users.length != 1) {
  //       return res.send({
  //         success: false,
  //         message: 'ERROR:  Unable to process login.'
  //       });
  //     };


  //     const user = users[0];
  //     console.log("password supplied = " + password);
  //     if (!user.validPassword(password, user.password)) {
  //       return res.send({
  //         success: false,
  //         message: 'ERROR:  Invalid login.'
  //       });
  //     };


  //     const userSession = new UserSession();
  //     userSession.userId = user._id;
  //     userSession.save((err, doc) => {
  //       if (err) {
  //         return res.send({
  //           success: false,
  //           message: 'ERROR:  Server error'
  //         });
  //       };


  //       return res.send({
  //         success: true,
  //         message: "User login is complete",
  //         token: doc._id
  //       });
  //     });
  //   });
  // },



  // //************************************************************/
  // //* Verify validity of a user's token if presented 
  // //************************************************************/
  // verify: (req, res) => {
  //   const { body } = req;
  //   const { token } = body;

  //   UserSession.find({
  //     _id: token,
  //     isDeleted: false
  //   }, (err, sessions) => {
  //     if (err) {
  //       return res.send({
  //         success: false,
  //         message: "ERROR:  Unable to obtain user token."
  //       });
  //     };


  //     if (sessions.length != 1) {
  //       return res.send({
  //         success: false,
  //         message: "ERROR:  Unable to verify session."
  //       });
  //     } else {
  //       return res.send({
  //         success: true,
  //         message: "Successfully verified session token."
  //       });
  //     };
  //   });
  // },



  // //************************************************************/
  // //* Process logout and invalidate user token in DB 
  // //************************************************************/
  // logout: (req, res) => {
  //   const { query } = req;
  //   const { token } = query;

  //   UserSession.findOneAndUpdate({
  //     _id: token,
  //     isDeleted: false
  //   }, {
  //       $set: { isDeleted: true }
  //     }, null, (err, sessions) => {
  //       if (err) {
  //         return res.send({
  //           success: false,
  //           message: "ERROR:  Unable to obtain user token."
  //         });
  //       };

  //       return res.send({
  //         success: true,
  //         message: "Successfully logged out."
  //       });
  //       // };
  //     });
  // },



};
