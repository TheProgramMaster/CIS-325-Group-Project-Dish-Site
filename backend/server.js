const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dishesRouter = require('./routes/dishes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (Replace 'your_mongodb_connection_string' with your actual MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/SoupDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Define your routes here
app.use('/dishes', dishesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});