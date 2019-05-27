const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Document = require('../models/document-model')

// GET ALL DOCUMENTS
router.get('/documents', (req, res, next) => {
  Document.find()
    .populate('proveedor')
    .populate('supervisor')
    .then(doc => res.status(200).json(doc))
    .catch(err => res.status(500).json(err))
})

// CREATE NEW DOCUMENT
router.post('/documents', (req, res, next) => {
  Document.create({
    imageUrl: req.body.imageUrl,
    folio: req.body.folio,
    fechaDoc: req.body.fechaDoc,
    CBB: req.body.CBB,
    importe: req.body.importe,
    proveedor: req.body.proveedor,
    articulos: req.body.articulos,
    nota: req.body.nota,
    supervisor: req.body.supervisor
  })
    .then(doc => res.status(200).json(doc))
    .catch(err => res.status(500).json(err))
})

// GET SPECIFIC DOCUMENT
router.get('/documents/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is no valid' })
    return
  }
  Document.findById(req.params.id)
    .populate('proveedor')
    .populate('supervisor')
    .then(docs => res.status(200).json(docs))
    .catch(err => res.status(500).json(err))
})

// UPDATE SPECIFIC DOCUMENT
router.put('/documents/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is no valid' })
    return
  }
  Document.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(200).json({ message: `Document with ${req.params.id} is updated succesfully.` }))
    .catch(err => res.status(500).json(err))
})

// DELETE SPECIFIC DOCUMENT
router.delete('/documents/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is no valid' })
    return
  }
  Document.findByIdAndRemove(req.params.id)
    .then(() => res.status(200).json({ message: `Document with ${req.params.id} is removed succesfully.` }))
    .catch(err => res.status(500).json(err))
})

function isLogged(req,res,next){
  if(!req.isAuthenticated()) return res.status(401).json({msg: "You're not logged"})
  next()
}
module.exports = router

