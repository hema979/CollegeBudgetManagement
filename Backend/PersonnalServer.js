const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const dataFilePath = path.join(__dirname, 'Combined_data.json'); // Change the file path


app.get('/api/data', (req, res) => {
  try {
    const rawData = fs.readFileSync(dataFilePath);
    const data = JSON.parse(rawData);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve data.' });
  }
});

app.post('/api/save-data', (req, res) => {
  try {
    const rawData = fs.readFileSync(dataFilePath);
    const data = JSON.parse(rawData);

    const newData = req.body;
    data.push(newData);

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    res.json({ message: 'Data successfully stored.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to store data.' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


