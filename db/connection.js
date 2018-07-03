const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/ga_students_db', {userMongoClient: true})
mongoose.connect('mongodb://localhost/ga_stundents_db')


// mongoose.Promise = Promise
module.exports = mongoose

