const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const socket = require('socket.io');
const mongoose = require('mongoose');

require('dotenv').config();

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');
const path = require('path');

const app = express();

const server = app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running...');
});

const io = socket(server, { cors: true });

io.on('connection', (socket) => {
    console.log('New Socket!');
});


mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.DB_PASS}@cluster0.zrsym.mongodb.net/NewWaveDB?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(express.static(path.join(__dirname, '/client/build/')));

app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((req, res) => {
    res.status(404).send({ message: 'Not found...' });
});

module.exports = server;