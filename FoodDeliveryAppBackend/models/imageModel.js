const moongoose = require('mongoose');


const ImageSchema = new moongoose.Schema({

    name: {
        type:String,
    },
    avatar: {
        type:String,
    },
    cloudinary_id: {
        type:String,
    }
})


module.exports = moongoose.model('Images',ImageSchema);