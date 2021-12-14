const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurantModel");

// router.get("/", async (req, res) => {
//   try {
//     const restaurants = await Restaurant.find();
//     res.send(restaurants);
//   } catch (err) {
//     res.send("err");
//   }
// });


router.get("/", async (req, res) => {
  try {
    
    const { page = 1, size = 10 } = req.query;

    const limit = parseInt(size);
    const skip = (page - 1) * size;
    const restaurants = await Restaurant.find().limit(limit).skip(skip);
    res.json(restaurants);
  } catch (err) {
    res.send("err");
  }
});




router.post("/", async (req, res) => {
  let RequestBody = req.body;
  const restaurantData = new Restaurant({
    id: RequestBody.id,
    name: RequestBody.name,
    rating: RequestBody.rating,
    categories: RequestBody.categories,
    priceRating: RequestBody.priceRating,
    photo: RequestBody.photo,
    duration: RequestBody.duration,
    courier: {
      avatar: RequestBody.courier.avatar,
      name: RequestBody.courier.name,
    },
    menu: RequestBody.menu,
  });
  console.log("Restaurants", req.body);
  try {
    const r1 = await restaurantData.save();
    res.json(r1);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", (req, res) => {
  Restaurant.deleteOne({ id: parseInt(req.params.id) })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.warn(err);
    });
});

module.exports = router;
