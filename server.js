const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
});

app.get('/test', (req, res) => {
    res.send('another GET')
});

app.post('/', (req, res) => {
    res.send('POST request to the homepage')
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));