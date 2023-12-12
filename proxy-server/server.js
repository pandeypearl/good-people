const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001

app.use('/', async (req, res) => {
    try {
        const response = await fetch('https://arthurfrost.qflo.co.za/php/getTimeline.php');
        const data = await response.json();

        // Setting the CORS headers
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

        // Sending the data with CORS headers
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server listening on port ${PORT}`);
})