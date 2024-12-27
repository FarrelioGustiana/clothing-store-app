const express = require('express');
const cookieParser = require('cookie-parser');
const { connectDB } = require('@config/db.js');
const userRoutes = require('@routes/userRoutes.js')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectDB();

app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
	res.json({ message: "API IS READY!" });
});

module.exports = app;
