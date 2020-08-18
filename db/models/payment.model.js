const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema(
	{
		user_id: { type: String, required: true },
		amount: { type: Decimal128, required: true },
		status_id: { type: String, required: true },
		payment_method_id: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment, paymentSchema };
