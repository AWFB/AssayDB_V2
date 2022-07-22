const mongoose = require('mongoose')

//todo: Need to work out best way to add mutiple alternative names
//todo: maybe send as an array... ?

const assaySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    sampType: {
      type: String,
      required: true,
    },
    sampVol: {
      type: String,
    },
    sampReq: {
      type: String,
    },
    transport: {
      type: String,
    },
    specAddress: {
      type: String,
    },
    country: {
      type: String,
    },
    telNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    acredStatus: {
      type: String,
    },
    website: {
      type: String,
    },
    npexAvailable: {
      type: String,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   strict: false,
    // },
  },
  { timestamps: true }
)

assaySchema.index({ name: 'text' })

const Assay = mongoose.model('Assay', assaySchema)
module.exports = Assay
