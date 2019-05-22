const mongoose = require('mongoose')
const Supplier = require('./supplier-model')

const articleSchema = new mongoose.Schema({
  codigoBarras: { type: String, required: true, unique: true },
  nombre: { type: String, required: true, unique: true },
  costo: { type: Number },
  impuestoIVA: { type: Number, required: true },
  impuestoIEPS: { type: Number, required: true },
  existencia: { type: Number, required: true },
  unidadVenta: { type: Number, required: true },
  unidadCompra: { type: Number, required: true },
  unidadesCaja: { type: Number, required: true },
  proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' }
},
{
  timestamps: true,
  versionKey: false
} )

module.exports = mongoose.model('Article',articleSchema)
