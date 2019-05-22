const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Article = require('../models/article-model')

// GET ALL ARTICLES
router.get('/articles', (req, res, next) => {
    Article.find().populate('suppliers')
        .then(articles => res.status(200).json(articles))
        .catch(err => res.status(500).json(err))
})

// CREATE NEW ARTICLE
router.post('/articles', (req, res, next) => {
    Article.create({//...req.body
        codigoBarras: req.body.codigoBarras,
        nombre: req.body.nombre,
        costo: req.body.costo,
        impuestoIVA: req.body.impuestoIVA,
        impuestoIEPS: req.body.impuestoIEPS,
        existencia: req.body.existencia,
        unidadVenta: req.body.unidadVenta,
        unidadCompra: req.body.unidadCompra,
        unidadesCaja: req.body.unidadesCaja,
        proveedor: req.body.proveedor
    })
        .then(art => res.status(200).json(art))
        .catch(err => res.status(500).json(err))
})

// GET SPECIFIC ARTICLE
router.get('/articles/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is no valid' })
        return
    }
    Article.findById(req.params.id).populate('proveedors')
        .then(article => res.status(200).json(article))
        .catch(err => res.status(500).json(err))
})

// UPDATE SPECIFIC ARTICLE
router.put('/articles/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is no valid' })
        return
    }
    Article.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.status(200).json({ message: `Article with ${req.params.id} is updated succesfully.` }))
        .catch(err => res.status(500).json(err))
})

// DELETE SPECIFIC ARTICLE
router.delete('/articles/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is no valid' })
        return
    }
    Article.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).json({ message: `Article with ${req.params.id} is removed succesfully.` }))
        .catch(err => res.status(500).json(err))
})

module.exports = router


/*      "codigoBarras": "11111111xxxxxxx1111111",
        "nombre": "Chela",
        "costo": 15,
        "impuestoIVA": 15,
        "impuestoIEPS": 5,
        "existencia": 100,
        "unidadVenta": 5,
        "unidadCompra": 30,
        "unidadesCaja": 50,
        "proveedor": "5cdee4189c8dcf2fa0abd985" */