const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./dbconfig');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use('/students', studentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
