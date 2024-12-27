const User = require('@models/userModel.js');
const bcrypt = require('bcryptjs');
const { createAccessToken, createRefreshToken } = require('@utils/createToken.js');

const createUser = async (req, res) => {
	try {
		const { email, password, name } = req.body;

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'User already exists' });
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 12);

		// Create new user
		const user = await User.create({
			email,
			password: hashedPassword,
			name
		});

		// Generate tokens
		const accessToken = createAccessToken(user);
		const refreshToken = createRefreshToken(user);

		res.status(201).json({
			message: 'User created successfully',
			accessToken,
			refreshToken
		});
	} catch (error) {
		res.status(500).json({ message: 'Server error', error: error.message });
	}
};

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Find user
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		// Verify password
		const isValidPassword = await bcrypt.compare(password, user.password);
		if (!isValidPassword) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		const accessToken = createAccessToken(user);
		const refreshToken = createRefreshToken(user);

		res.json({
			message: 'Login successful',
			accessToken,
			refreshToken
		});
	} catch (error) {
		res.status(500).json({ message: 'Server error', error: error.message });
	}
};

const refreshToken = async (req, res) => {
	try {
		const { refreshToken } = req.body;
		if (!refreshToken) {
			return res.status(400).json({ message: 'Refresh token required' });
		}

		const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
		const user = await User.findById(decoded.userId);

		if (!user) {
			return res.status(401).json({ message: 'User not found' });
		}

		const accessToken = createAccessToken(user);

		res.json({ accessToken });
	} catch (error) {
		res.status(401).json({ message: 'Invalid refresh token' });
	}
};

const getProfile = async (req, res) => {
	try {
		const user = await User.findById(req.user.userId).select('-password');
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: 'Server error', error: error.message });
	}
};


const deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.user.userId);
		res.json({ message: 'Account deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Server error', error: error.message });
	}
};

module.exports = {
	createUser,
	loginUser,
	refreshToken,
	getProfile,
	deleteUser
};