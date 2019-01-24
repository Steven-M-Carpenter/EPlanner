const db = require("../models");
const Event = require("../models/Event")
// const UserSession = require("../models/UserSession")

// Defining methods for the loginController
module.exports = {

  //************************************************************/
  //* Allow users to self register
  //************************************************************/
  addEvent: (req, res) => {
    console.log("body = " + JSON.stringify(req.body));

    const { body } = req;
    const {
      start,
      end,
      title
    } = body;


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
    if (!title) {
      return res.send({
        success: false,
        message: 'ERROR: You must specify a title for the event.'
      });
    };

    const newEvent = new Event();
    newEvent.title = title;
    newEvent.start = start;
    newEvent.end = end;
    newEvent.save((err, event) => {
      if (err) {
        return res.send({
          success: false,
          message: 'ERROR:  Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Event saved!'
      });
    });
  },


  //************************************************************/
  //* Load all events
  //************************************************************/
  loadEvents: (req, res) => {
    db.Event
      .find({ isDeleted: false })
      .sort({ start: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //************************************************************/
  //* Modify events as directed
  //************************************************************/
  chgEvent: (req, res) => {
    console.log("Request Body = " + JSON.stringify(req.body));
    db.Event
      // .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, req.body)
      .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, 
      // .findByIdAndUpdate({ _id: req.body.id },
        {
          $set: {
            title: req.body.title,
            start: req.body.start,
            end: req.body.end
          }
        }, null,
        (err, event) => {
          if (err) {
            return res.send({
              success: false,
              message: "ERROR:  Unable to alter the requested record."
            });
          } 
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //   Event.findOneAndUpdate({ _id: eventID, isDeleted: false }, { $set: { isDeleted: true }}, null, 

  //************************************************************/
  //* Delete events when prompted to do so
  //************************************************************/
  deleteEvent: (req, res) => {
    console.log("Request Body = " + JSON.stringify(req.body));
    db.Event
    // .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, req.body)
    .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, 
    // .findByIdAndUpdate({ _id: req.body.id },
      {
        $set: {
          isDeleted: true
        }
      }, null,
      (err, event) => {
        if (err) {
          return res.send({
            success: false,
            message: "ERROR:  Unable to alter the requested record."
          });
        } 
      }
    )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));


    // db.Event
    //   .findById({ _id: req.params.id })
    //   .then(dbModel => dbModel.remove())
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));


    // removeEvent: (req, res) => {
    //   const { query } = req;
    //   const { eventID } = query;

    //   Event.findOneAndUpdate({
    //     _id: eventID,
    //     isDeleted: false
    //   }, {
    //       $set: { isDeleted: true }
    //     }, null, (err, sessions) => {
    //       if (err) {
    //         return res.send({
    //           success: false,
    //           message: "ERROR:  Unable to obtain the requested record."
    //         });
    //       };

    //       return res.send({
    //         success: true,
    //         message: "Successfully deleted."
    //       });
    //       // };
    //     });
    // },

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
