const validateUserInput = (req, res, next) => {
  const { email, password } = req.body;

  // Basic validation example - enhance based on your needs
  if (req.path === '/register' || req.path === '/login') {
      if (!email || !password) {
          return res.status(400).json({ 
              message: 'Email and password are required' 
          });
      }

      if (password.length < 6) {
          return res.status(400).json({ 
              message: 'Password must be at least 6 characters long' 
          });
      }

      if (!email.includes('@')) {
          return res.status(400).json({ 
              message: 'Please provide a valid email address' 
          });
      }
  }

  next();
};

module.exports = { validateUserInput };