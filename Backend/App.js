// app.js
const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware (Optional)
// app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello, Donation received!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
