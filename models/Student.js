const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema;


const Student = new Schema({
  firstName: String,
  lastName: String,
  course: String

})

module.exports = mongoose.model('Student', Student)
