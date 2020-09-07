const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema(
	{
		userId: { type: String, required: true },
		amount: { type: mongoose.Decimal128, required: true },
		statusId: { type: String, required: true },
		paymentMethodId: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = { Payment, paymentSchema };
