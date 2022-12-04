const express = require("express");
const Cart = require("../models/cart");
const router = express.Router();


//add Product to cart
router.post("/addProducttocart", async (req, res) => {
 
    try {
      const newProducttocart = new Cart({product:req.body.product,qte:1});
      await newProducttocart.save();
      res.send({ cart: newProducttocart, message: "product succesffuly" });
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
  //getcart
router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find({});
    res.send({ cart });
  } catch (err) {
    res.status(400).send(err.message);
  }
});
// Delete Product to cart
router.delete("/:id", async (req, res) => {
  try {
    const deleteProductToCart = await Cart.deleteOne({ _id: req.params.id });
    console.log(deleteProductToCart);
    res.send({msg:"product deleted"})
  } catch (err) {
    res.status(400).send(err.message);
  }
});


  module.exports = router;