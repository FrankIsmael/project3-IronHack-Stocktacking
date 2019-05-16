const mongoose = require('mongoose')

const proveedorSchema = new mongoose.Schema({
  nombre:{type:String,required:true},
  rfc:{type:String,required:true},
  razonSocial:{type:String},
  direccion:{type:String},
  telefono:{type:String,required:true}
})

module.exports = mongoose.model('Proveedor',proveedorSchema)

