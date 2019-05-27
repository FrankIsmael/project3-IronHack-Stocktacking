const mongoose = require('mongoose')
const Article = require('./article-model')

const documentSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  folio: { type: String },
  fechaDoc: { type: String },
  CBB: { type: Number}, // codigo QR
  importe: { type: Number },
  proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  articulos: { type: Array },
  nota: { type: String },
  supervisor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},
  {
    timestamps: true,
    versionKey: false
  })

module.exports = mongoose.model('Document', documentSchema)
