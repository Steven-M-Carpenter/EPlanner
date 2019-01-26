const db = require("../models");
const Card = require("../models/Card");
const ColName = require("../models/Column");

// Defining methods for the taskController
module.exports = {

  //************************************************************/
  //* Add a new card
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
  //* Load all cards
  //************************************************************/
  loadCards: (req, res) => {
    db.Card
      .find({ isDeleted: false, isArchived: false })
      .sort({ start: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //************************************************************/
  //* Load all cards
  //************************************************************/
  listCols: (req, res) => {
    db.Column
      .find({ isDeleted: false })
      .sort({ dispOrder: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  
  //************************************************************/
  //* Modify events as directed
  //************************************************************/
  // chgEvent: (req, res) => {
  //   console.log("Request Body = " + JSON.stringify(req.body));
  //   db.Event
  //     // .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, req.body)
  //     .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, 
  //     // .findByIdAndUpdate({ _id: req.body.id },
  //       {
  //         $set: {
  //           title: req.body.title,
  //           start: req.body.start,
  //           end: req.body.end
  //         }
  //       }, null,
  //       (err, event) => {
  //         if (err) {
  //           return res.send({
  //             success: false,
  //             message: "ERROR:  Unable to alter the requested record."
  //           });
  //         } 
  //       }
  //     )
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


  //************************************************************/
  //* Delete events when prompted to do so
  //************************************************************/
  // deleteEvent: (req, res) => {
  //   console.log("Request Body = " + JSON.stringify(req.body));
  //   db.Event
  //   // .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, req.body)
  //   .findOneAndUpdate({ _id: req.body.id, isDeleted: false }, 
  //   // .findByIdAndUpdate({ _id: req.body.id },
  //     {
  //       $set: {
  //         isDeleted: true
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
  // },


};
