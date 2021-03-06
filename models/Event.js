const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const EventSchema = new Schema({
  start: { type: String, required: true },
  end: { type: String, required: true },
  title: { type: String, required: true },
  isDeleted:  { type: Boolean, default: false }
});


// UserSchema.methods.generateHash = (password) => {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
// };


// UserSchema.methods.validPassword = (password, storedPW) => {
//   console.log("pw tpw = " + password + " " + storedPW);
//   return bcrypt.compareSync(password, storedPW);
// };


module.exports = mongoose.model("Event", EventSchema);
