const users = require('./user')
const express = require('express')
const app = express()

const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const bcrypt = require('bcrypt')


const PORT = process.env.PORT || 3800;
app.use(express.json())


app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})

//All routes are in routes.js file.
require('./routes')(app)

// app.set('views', path.join(__dirname, 'index'))


// // Data connection
// const url = 'mongodb://localhost/varlyq';

// mongoose.connect(url, { useNewUrlParser: true,
//     useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });

//  const connection = mongoose.connection;
 
//  connection.once('open', () => {
//      console.log('Database connected...');
//  }).catch(err => {
//      console.log('Connection failed...')
//  }); 
