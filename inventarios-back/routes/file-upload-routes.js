const express = require('express')
const router = express.Router()

const uploader = require('../configs/cloudinary-setup')

router.post('/upload', uploader.single('imageUrl',{OCR:'adv_ocr'}), (req, res, next) => {
  if (!req.file) {
    return next(new Error('No file uploaded!'));
  }
  res.json({secure_url:req.file.secure_url,ocr:req.file.info})
  console.log(res.json())

})

module.exports = router
