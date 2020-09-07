const router = require("express").Router();
let Payment = require("../../db/models/payment.model").Payment;

// Get all products
router.route("/").get((req, res) => {
	Payment.find()
		.then((Payment) => res.json(Payment))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Get specific Payment
router.route("/:id").get((req, res) => {
	const id = req.params.id;
	Payment.findById(id, (err, Payment) => {
		if (err) res.status(400).json("Error: " + err);
		res.json(Payment);
	});
});

// Create new Payment
router.route("/").post((req, res) => {
	const newPayment = new Payment(req.body);
	newPayment
		.save()
		.then(() => res.json("Payment added."))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Update a specific Payment
router.route("/:id").put(async (req, res) => {
	const id = req.params.id;
	try {
		let updatedPayment = await Payment.findByIdAndUpdate(id, req.body, {
			"new": true,
			useFindAndModify: false,
		});
		res.json(updatedPayment);
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

// Delete a Payment
router.route("/:id").delete(async (req, res) => {
	const id = req.params.id;
	try {
		const deletedPayment = await Payment.findByIdAndDelete(id);
		res.json(deletedPayment);
	} catch (err) {
		res.status(400).json("Error: " + err);
	}
});

module.exports = router;
