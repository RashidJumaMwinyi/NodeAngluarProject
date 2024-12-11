const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes/routes');
const app = express(); 
const cors = require('cors');


mongoose.connect(uri)
    .then(() => {
        console.log('Connection instantiated!!');

    })
    .catch((error) => {
        console.error('DB Not connected: ' + error);
    });

app.use(express.json());
app.use(routes);
app.use(cors());

const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => {
    console.log(`Server is running on port https://localhost:${PORT}`);
});



