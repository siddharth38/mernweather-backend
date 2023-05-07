const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const normalizePort = require('./normalizeport');

const PORT = normalizePort(process.env.PORT || 5000);

app.use(express.json());
app.use(cors());

const router = require('./router'); 
app.use("/forcasts/", router);

app.use(express.static('public'));

app.get('/', (req, res) => {
    const d = new Date();
    res.json({ currenttime: d.toTimeString() });
    console.log('Received GET request...');
});

app.listen(PORT, '127.0.0.1', () => {

  console.log(`Server is listening on port ${PORT}...`);

});
