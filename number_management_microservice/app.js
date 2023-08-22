const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
const urls = req.query.url || [];
const mergedNumbers = [];

const requests = urls.map(async (url) => {
try {
    const response = await axios.get(url, { timeout: 500 });
    const data = response.data;
    if (data && Array.isArray(data.numbers)) {
        mergedNumbers.push(...data.numbers);
    }
    } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    }
});

try {
    await Promise.all(requests);
    const uniqueSortedNumbers = Array.from(new Set(mergedNumbers)).sort((a, b) => a - b);
    const mergedNumbersString = uniqueSortedNumbers.join(', ');
    res.json({ numbers: mergedNumbersString });
} catch (error) {
    console.error('An error occurred while processing the request:', error.message);
    res.status(500).json({ error: 'An error occurred while processing the request' });
}
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});