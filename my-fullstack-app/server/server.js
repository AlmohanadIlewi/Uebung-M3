/* const express = require('express');

const app = express();

const port = 8080;

app.get('/', (req, res) => {
res.send('Hallo von Express!');
});

app.listen(port, () => {
console.log(`Server läuft auf Port ${port}`);
});
*/

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
app.use(cors());

app.get('/', (req, res) => {
res.send('Hallo von Express!');
});

app.get('/api/nachricht', (req, res) => {
    console.log('GET /api/nachricht ', req.ip);
    res.json({ nachricht: 'Hallo von der API' });
});

app.listen(port, () => {
console.log(`Server läuft auf Port ${port}`);
});

