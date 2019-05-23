const mongoose = require('mongoose')
const Article = require('./article-model')

const documentSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  folio: { type: String, required: true },
  fechaDoc: { type: String, required: true },
  CBB: { type: Number, required: true }, // codigo QR
  importe: { type: Number, required: true },
  proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Suplier' },
  articulos: { type: Array },
  nota: { type: String },
  supervisor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},
  {
    timestamps: true,
    versionKey: false
  })

module.exports = mongoose.model('Document', documentSchema)
