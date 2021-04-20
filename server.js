const express = require('express');
const cors = require('cors');
const testimonialsRoutes = require('./routes/testimonials.routes')

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', testimonialsRoutes);


app.use((req, res) => {
    res.status(404).send({ message: 'Not found...' });
});

app.listen(8000, () => {
    console.log('Server is running...');
});