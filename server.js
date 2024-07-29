const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/simple-reddit')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const routes = require('./routes');
app.use('/api', routes);

app.get('/', (req, res) => res.send('API Running'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
