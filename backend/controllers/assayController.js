const Assay = require('../models/assayModel')
const mongoose = require('mongoose')

//? get all Assays
const getAllAssays = async (req, res) => {
  const assays = await Assay.find({})

  res.status(200).json(assays)
}

//? Get a specific Assay
const getAssay = async (req, res) => {
  const { id } = req.params

  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such assay' })
  }

  const assay = await Assay.findById(id)

  // check assay exists
  if (!assay) {
    return res.status(404).json({ error: 'No such Assay' })
  }
  res.status(200).json(assay)
}

//? Create new Assay
const createAssay = async (req, res) => {

  // add assay to db
  try {
    const assayData = req.body
    const assay = await Assay.create(assayData)
    res.status(200).json(assay)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//? Delete Assay
const deleteAssay = async (req, res) => {
    const { id } = req.params

     // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such assay' })
    }

    const assay = await Assay.findOneAndDelete({_id: id})

     // check assay exists
    if (!assay) {
    return res.status(404).json({ error: 'No such Assay' })
  }
  res.status(200).json(assay)

}

//? Update an assay
const updateAssay = async (req, res) => {
    const { id } = req.params

     // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such assay' })
    }
    const assay = await Assay.findOneAndUpdate({_id: id}, {
       ...req.body
    })
    if (!assay) {
    return res.status(404).json({ error: 'No such Assay' })
  }
  res.status(200).json(assay)
}

module.exports = {
  createAssay,
  getAssay,
  getAllAssays,
  deleteAssay,
  updateAssay
}
