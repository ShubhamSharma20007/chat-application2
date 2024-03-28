const env = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const dbConnection = require('./config/dbConnection');
const routes = require('./routes/userRoute');
dbConnection()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}))


app.use('/api/v1/auth',routes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})