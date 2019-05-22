const express = require('express')
const router = express.Router()
const Supplier = require('../models/supplier-model')

// GET ALL SUPPLIERS
router.get('/suppliers', (req, res, next) => {
    Supplier.find()
        .then(suppliers => res.status(200).json(suppliers))
        .catch(err => res.status(500).json(err))
})

// CREATE NEW SUPPLIER
router.post('/suppliers', (req, res, next) => {
    Supplier.create({
        nombre: req.body.nombre,
        rfc: req.body.rfc,
        razonSocial: req.body.razonSocial,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    })
        .then(supplier => res.status(200).json(supplier))
        .catch(err => res.status(500).json(err))
})

// GET SPECIFIC SUPPLIER
router.get('/suppliers/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is no valid' })
        return
    }
    Supplier.findById(req.params.id)
        .then(Supplier => res.status(200).json(Supplier))
        .catch(err => res.status(500).json(err))
})

// UPDATE SPECIFIC SUPPLIER
router.put('/suppliers/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is no valid' })
        return
    }
    Supplier.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.status(200).json({ message: `Article with ${req.params.id} is updated succesfully.` }))
        .catch(err => res.status(500).json(err))
})

// DELETE SPECIFIC SUPPLIER
router.delete('/suppliers/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is no valid' })
        return
    }
    Supplier.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).json({ message: `Supplier with ${req.params.id} is removed succesfully.` }))
        .catch(err => res.status(500).json(err))
})
module.exports = router

