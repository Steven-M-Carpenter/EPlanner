const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CardSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String },
  start: { type: String, required: true },
  end: { type: String, required: true },
  steps: { type: [String] },
  lane: { type: String, default: -1, required: true },
  column: { type: String, default: -1, required: true },
  isDeleted:  { type: Boolean, default: false },
  isClosed: { type: Boolean, default: false },
  isArchived:  { type: Boolean, default: false }
});


// UserSchema.methods.generateHash = (password) => {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
// };


// UserSchema.methods.validPassword = (password, storedPW) => {
//   console.log("pw tpw = " + password + " " + storedPW);
//   return bcrypt.compareSync(password, storedPW);
// };


module.exports = mongoose.model("Card", CardSchema);
