const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors package
const { connectToDatabase } = require('./dbConfig');
const controller = require('./controller');

const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors({
    origin: 'http://localhost:3000'  // Replace this with your frontend's URL
}));

app.use(bodyParser.json());

// Connect to the database
connectToDatabase();

// Define the API routes
app.get('/api/stocks', controller.getStockData);
app.get('/api/moving-averages', controller.getMovingAverages);
app.get('/api/indicators', controller.getIndicators);
app.get('/api/bollinger-bands', controller.getBollingerBands);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
