import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
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

const Item = mongoose.model("Item", itemSchema);

export default Item;
