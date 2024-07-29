
const port = process.env.PORT || 5001; 
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const OrgRoutes = require('./routes/OrgRoutes');

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Connect to MongoDB server
mongoose.connect(process.env.MONGO_ORG_DB)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
});

app.post("/OrgUsers",OrgRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


