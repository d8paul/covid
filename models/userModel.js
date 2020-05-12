const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
  sur_name: {
    type: String,
    required: true
  },
  given_name: {
    type: String,
    required: true
  },
  residence: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  ids: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});
// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);

