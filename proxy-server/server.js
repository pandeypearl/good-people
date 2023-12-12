const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001

// Endpoint fetching combined data
app.get('/combinedData', async (req, res) => {
    try {
        const response = await fetch('https://arthurfrost.qflo.co.za/php/getTimeline.php');
        const data = await response.json();

        const timelineData = data.Timeline || []
        const bodyData = data.Body || []

        res.json({timelineData, bodyData});
    } catch (error) {
        console.error('Error fetching combined data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server listening on port ${PORT}`);
});