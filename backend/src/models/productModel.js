const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: Number, required: true },
		brand: { type: String, required: true },
		category: { type: String, required: true }, // e.g., "Men", "Women", "Kids"
		sizes: [{ type: String }], // e.g., ["S", "M", "L", "XL"]
		colors: [{ type: String }], // e.g., ["Red", "Blue", "Black"]
		stock: { type: Number, required: true },
		images: [{ type: String }], // Array of image URLs
		isFeatured: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
