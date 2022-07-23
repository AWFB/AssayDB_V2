const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')
const Assay = require('./assayModel')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  lab: {
    type: String,
    required: [true, 'Please enter the name of your lab/hospital'],
  },
  assays: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Assay,
  },
})

userSchema.index({ lab: 'text' })

// static signup method
userSchema.statics.register = async function (email, password, lab, name) {
  if (!email || !password) {
    throw Error('All fields must be complete')
  }

  const exists = await this.findOne({email})

  if(exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({email, password: hash, name, lab})

  return user
}

const User = mongoose.model('User', userSchema)

module.exports = User
