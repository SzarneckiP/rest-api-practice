const Seats = require('../models/seats.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Seats.find());
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getRandom = async (req, res) => {
    try {
        const count = await Seats.countDocuments();
        const rand = Math.floor(Math.random() * count);
        const seat = await Seats.findOne().skip(rand);
        if (!seat) res.status(404).json({ message: 'Not found...' });
        else res.json(seat);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getById = async (req, res) => {
    try {
        const seat = await Seats.findById(req.params.id);
        if (!seat) res.status(404).json({ message: 'Not found...' });
        else res.json(seat);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

exports.post = async (req, res) => {
    try {
        const { day, seat, client, email } = req.body;
        const newSeat = new Seats({ day: day, seat: seat, client: client, email: email });
        await newSeat.save();
        res.json(newSeat);
        req.io.emit('seatsUpdated', await Seats.find());
    } catch (err) {
        res.status(500), json({ message: err });
    }
}

exports.update = async (req, res) => {
    try {
        const { day, seat, client, email } = req.body;
        const sea = await (Seats.findById(req.params.id));
        if (sea) {
            sea.day = day;
            sea.seat = seat;
            sea.client = client;
            sea.email = email;
            await sea.save();
            res.json(sea);
        } else res.status(404).json({ message: 'Not found...' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

exports.delete = async (req, res) => {
    try {
        const seat = await (Seats.findById(req.params.id));
        if (seat) {
            await Seats.remove({ _id: req.params.id });
        } else res.status(404).json({ message: 'Not found...' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}