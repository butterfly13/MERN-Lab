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
  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => console.log(err))
})

// to update student by id
app.put('/api/students/:id',(req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, (err, student) => {
    // handle db errors
    if(err) return res.status(500).send(err)
    return res.send(student)
  })
})

// delete a student by id
app.delete('/api/students/:id', (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, student) => {
    // handle any db errors
    if(err) return res.status(500).send(err)
    
    const feedback = {
      message: "Successfully deleted student",
      id: req.params.id
    }

    return res.status(200).send(feedback)
  })
  
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
  console.log('Listen to port ' + app.get('port'))
})

