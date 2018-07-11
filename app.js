const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('./models/Student.js')
const Student = mongoose.model('Student')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello there')
});

// get all students
app.get('/api/students', (req, res) => {
  Student.find()
    .then((students)=> {
      res.json(students)
    })
    .catch(err => console.log(err))
})

// add student
app.post('/api/students', (req, res) => {
  Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    course: req.body.course 
  })
    .then(students => res.json(students))
    .catch(err => console.log(err))
})

// show sigle student
app.get('/api/students/:id', (req, res) => {
  Student.findOne(req.params.id)
    .then(students => res.json(students))
    .catch(err => console.log(err))
})


app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
  console.log('Listen to port ' + app.get('port'))
})

