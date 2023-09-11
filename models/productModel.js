import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String || Object,
      required: true,
    },
    slug: {
      type: String,
    },
    description: {
      type: String || Object,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    secondPhoto: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
    different: {
      type: Boolean,
    },
    image_ids: {
      type: Object,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);