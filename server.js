const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

const db = [
    { id: 1, author: 'John Doe', text: 'This company is worth every coin!' },
    { id: 2, author: 'Amanda Doe', text: 'They really know how to make you happy.' },
];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/testimonials', (req, res) => {
    res.json(db);
});

app.get('/testimonials/random', (req, res) => {
    res.send(uuidv4(db));
});

app.get('/testimonials/:id', (req, res) => {
    res.send(req.params);
});

app.post('/testimonials', (req, res) => {
    const { author, text } = req.body;
    return (
        res.send({ message: 'ok' })
    );
});

app.put('/testimonials/:id', (req, res) => {
    const { author, text } = req.body;
    res.send({ message: 'ok' });
});

app.delete('/testimonials/:id', (req, res) => {
    res.send({ message: 'ok' });
});


app.use((req, res) => {
    res.status(404).send({ message: 'Not found...' });
});

app.listen(8000, () => {
    console.log('Server is running...');
});