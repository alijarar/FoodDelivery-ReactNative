const moongoose = require('mongoose');


const categorySchema = new moongoose.Schema({

    id: {
        type:Number,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    icon: {
        type:String,
        required: true
    }
})


module.exports = moongoose.model('Category',categorySchema);