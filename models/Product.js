import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 2 },
    author: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String },
    publisher: { type: String },
    isbn: { type: String, unique: true },
    stock: { type: Number, default: 0, min: 0 },
    
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
