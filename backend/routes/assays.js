const express = require('express')
const {
  createAssay,
  getAllAssays,
  getAssay,
  deleteAssay,
  updateAssay
} = require('../controllers/assayController')

// /api/assays/....
const router = express.Router()

// Get all Assays
router.get('/', getAllAssays)

// Get specific assay
router.get('/:id', getAssay)

// Post a new assay
router.post('/', createAssay)

// Delete an assay
router.delete('/:id', deleteAssay )

// update an assay
router.patch('/:id', updateAssay)

module.exports = router
