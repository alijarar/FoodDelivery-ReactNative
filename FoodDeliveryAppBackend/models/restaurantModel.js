const moongoose = require("mongoose");

const restaurantSchema = new moongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  categories: {
    type: [Number],
    required: true,
  },
  priceRating: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  courier: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  menu: [
    {
      menuId: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      calories: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = moongoose.model("restaurant", restaurantSchema);
