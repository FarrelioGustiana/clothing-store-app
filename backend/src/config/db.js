const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log(`Successfully connnected to mongoDB!👌🚀`);
	} catch (error) {
		console.log(`ERROR: ${error.message}`);
		process.exit(1);
	}
};

module.exports = {
	connectDB,
};
