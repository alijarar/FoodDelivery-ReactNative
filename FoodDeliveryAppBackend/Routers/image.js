const express = require('express');
const router = express.Router();
const Image = require('../models/imageModel')
const upload = require('../utils/multer');
const cloudinary = require('../utils/cloudinary');




router.post('/',upload.single("image"), async (req, res) =>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path);

        let imageData = new Image({
            name:req.body.name,
            avatar:result.secure_url,
            cloudinary_id:result.public_id,
        })

        await imageData.save();
        res.json(imageData)
        
    } catch (err) {
        console.group(err)
        
    }
})

module.exports = router;