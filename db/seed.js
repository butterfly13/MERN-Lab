const Student = require('../models/Student.js')
const mongoose = require('./connection.js')
const studentList = require('./studentList.json')

Student.remove({})
  .then(() => {
    Student.collection.insert(studentList)
      .then(students => {
        console.log(students)
        process.exit()
      })
  })
  .catch(err => {
    console.log(err)
  })
