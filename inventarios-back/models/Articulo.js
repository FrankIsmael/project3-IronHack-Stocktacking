const mongoose = require('mongoose')

const articuloSchema = new mongoose.Schema({
  codigoBarras: { type: String, required: true, unique: true },
  nombre: { type: String, required: true, unique: true },
  costo: { type: Number },
  impuestoIVA: { type: Number, required: true },
  impuestoIEPS: { type: Number, required: true },
  existencia: { type: Number, required: true },
  unidadVenta: { type: Number, required: true },
  unidadCompra: { type: Number, required: true },
  unidadesCaja: { type: Number, required: true },
  proveedor: { type: Schema.Types.ObjectId, ref: 'Proveedor' }
})

module.exports = mongoose.model('Articulo', articuloSchema)
