require('module-alias/register');

const dotenv = require('dotenv');
dotenv.config()

const app = require('@app');

const PORT = process.env.PORT || 6600

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});