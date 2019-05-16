const mongoose = require('mongoose')

const documentoSchema = new mongoose.Schema({
  folio:{type:String,required:true},
  fechaDoc:{type:String,required:true},
  CBB:{type:Number,required:true}, // codigo QR
  importe:{type:Number,required:true},
  proveedor:{type:Schema.Types.ObjectId,ref:'Proveedor'},
  articulos:{type:[],ref:'Articulo'},
  nota:{type:String}
})

module.exports('Documento',documentoSchema)