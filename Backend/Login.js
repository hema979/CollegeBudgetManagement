const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const PORT = 5000; // You can choose any port you prefer

app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// // Define a route to handle the login data from the frontend
// app.post('/api/login', (req, res) => {
//   // ... (existing code to handle login and save data)
// });
// In the post route for handling login data
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Received data:', email, password);
  // ... rest of your code to save data
});

// Add a new route to retrieve and display user data from login.json
app.get('/api/users', (req, res) => {
  fs.readFile('login.json', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading user data' });
    }

    const users = JSON.parse(data);
    return res.status(200).json(users);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
