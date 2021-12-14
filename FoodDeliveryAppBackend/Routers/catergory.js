const express = require('express');
const router = express.Router();
const Category = require('../models/catergoryModel')


// router.get('/',async (req,res) =>{
//     try {
//         const categories = await Category.find()
//         res.send(categories)
        
//     } catch (err) {
//         res.send("err")
//     }

// })


router.get('/',async (req,res) =>{
    try {
        console.log(req.query)
        const { page = 1, size = 10 } = req.query;

        const limit = parseInt(size);
        const skip = (page - 1) * size;
        
        const result = await Category.find().limit(limit).skip(skip);
        // res.send({
        //     page,
        //     size,
        //     data:result,
        // })
        res.json(result)
        
    } catch (err) {
        res.send("err")
    }

})


router.post('/',async (req,res) =>{
    const catergoryData = new Category({
        id: req.body.id,
        name: req.body.name,
        icon: req.body.icon
    })  
    console.log(req.body)
    try {
        const c1=await catergoryData.save()
        res.json(c1)
        
    } catch (err) {
        res.send(err)
        
    }

})

router.delete('/:id',(req,res) =>{
        Category.deleteOne({id: parseInt(req.params.id)}).then((result)=>{
            res.status(200).json(result)

        }).catch((err)=>{
            console.warn(err)
        })
      

})

module.exports = router;