const express = require('express')
const router = express.Router()

const Articulo = require('../models/Articulo')
const Documento = require('../models/Document')
const Proveedor = require('../models/Proveedor')
const User = require('../models/User')

router.get('/articulos', (req, res, next) => {
    Articulo.find()
        .then(articulos => res.status(200).json(articulos))
        .catch(err => res.status(500).json(err))
})

router.post('/articulos/new', (req, res, next) => {
    Articulo.create({
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

router.get('/documentos', (req, res, next) => {
    Documento.find()
        .then(documentos => res.status(200).json(documentos))
        .catch(err => res.status(500).json(err))
})

router.post('/documentos/new', (req, res, next) => {
    Document.create({
        folio: req.body.folio,
        fechaDoc: req.body.fechaDoc,
        CBB: req.body.CBB,
        importe: req.body.importe,
        proveedor: req.body.proveedor,
        articulos: req.body.articulos,
        nota: req.body.nota
    })
        .then(doc => res.status(200).json(doc))
        .catch(err => res.status(500).json(err))
})

router.get('/proveedores', (req, res, next) => {
    Proveedor.find()
        .then(proveedores => res.status(200).json(proveedores))
        .catch(err => res.status(500).json(err))
})

router.post('/proveedores/new', (req, res, next) => {
    Proveedor.create({
        nombre: req.body.nombre,
        rfc: req.body.rfc,
        razonSocial: req.body.razonSocial,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    })
        .then(prov => res.status(200).json(prov))
        .catch(err => res.status(500).json(err))
})

module.exports = router