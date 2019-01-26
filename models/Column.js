const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ColumnSchema = new Schema({
  columnName: { type: String, required: true },
  dispOrder: { type: Number, required: true },
  isDeleted:  { type: Boolean, default: false }
});



// UserSchema.methods.generateHash = (password) => {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
// };


// UserSchema.methods.validPassword = (password, storedPW) => {
//   console.log("pw tpw = " + password + " " + storedPW);
//   return bcrypt.compareSync(password, storedPW);
// };


module.exports = mongoose.model("Column", ColumnSchema);
