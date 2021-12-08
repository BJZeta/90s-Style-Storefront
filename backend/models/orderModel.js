import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  orderedItems: {
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    name: { type: String, required: true },
    name: { type: String, required: true },
    //////////////////////////////////////////
    //////Continue building order Schema//////
    //////////////////////////////////////////
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  inStock: {
    type: Boolean,
    required: true,
    default: true,
  },
  description: {
    type: String,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
