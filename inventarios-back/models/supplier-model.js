const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
  nombre:{type:String,required:true},
  rfc:{type:String,required:true},
  razonSocial:{type:String},
  direccion:{type:String},
  telefono:{type:String,required:true}
},
{
  timestamps: true,
  versionKey: false
})

module.exports = mongoose.model('Supplier',supplierSchema)

