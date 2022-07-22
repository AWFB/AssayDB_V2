require('dotenv').config()
const express = require('express')
const assayRoutes = require('./routes/assays')

const app = express()
const mongoose = require('mongoose')

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api/assays', assayRoutes)

// Connect to DB and start server if connected
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB & Server running on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
