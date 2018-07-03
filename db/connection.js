const mongoose = require('mongoose')

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL, {useMongoClient: true})
} else {
  mongoose.connect('mongodb://localhost/ga_students_db', {userMongoClient: true})
}

// mongoose.connect('mongodb://localhost/ga_students_db', {userMongoClient: true})
// mongoose.connect('mongodb://localhost/ga_stundents_db')

mongoose.Promise = Promise
module.exports = mongoose
