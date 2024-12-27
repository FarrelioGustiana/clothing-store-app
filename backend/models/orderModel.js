const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		orderItems: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
					required: true,
				},
				quantity: { type: Number, required: true },
				size: { type: String, required: true },
				color: { type: String, required: true },
			},
		],
		shippingAddress: { type: String, required: true },
		paymentMethod: { type: String, required: true },
		paymentStatus: { type: String, default: "Pending" }, // Pending, Paid, Failed
		totalPrice: { type: Number, required: true },
		isDelivered: { type: Boolean, default: false },
		deliveredAt: { type: Date },
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
