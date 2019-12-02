const express = require('express');
const dotenv = require('dotenv');

// Routing file './routes/bootcamps.js
const bootcamps = require('./routes/bootcamps')

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount router to a specific file in this case './routes/bootcamps.js
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))