const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware для обработки JSON
app.use(express.json());

// Пример GET запроса к Django API
app.get('/items', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8000/api/items/');
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

// Пример POST запроса к Django API
app.post('/items', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:8000/api/items/', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(port, () => {
    console.log(`Frontend server is running at http://localhost:${port}`);
});