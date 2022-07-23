const User = require('../models/userModel')

// /api/user/....

// login user
const loginUser = async (req, res) => {
  res.json({ mssg: 'Login user' })
}

const registerUser = async (req, res) => {
  const { email, password, name, lab } = req.body

  try {
    const user = await User.register(email, password, name, lab)

    res.status(200).json({ email, password, name, lab })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  loginUser,
  registerUser,
}
