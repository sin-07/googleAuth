const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');


app.use(cors());
app.use(express.json());
app.use('/api',authRoutes);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})