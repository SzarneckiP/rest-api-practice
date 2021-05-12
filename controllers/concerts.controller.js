const Concerts = require('../models/concerts.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Concerts.find());
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getRandom = async (req, res) => {
    try {
        const count = await Concerts.countDocuments();
        const rand = Math.floor(Math.random() * count);
        const conc = await Concerts.findOne().skip(rand);
        if (!conc) res.status(404).json({ message: 'Not found...' });
        else res.json(conc);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getById = async (req, res) => {
    try {
        const conc = await Concerts.findById(req.params.id);
        if (!conc) res.status(404).json({ message: 'Not found...' });
        else res.json(conc);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

exports.post = async (req, res) => {
    try {
        const { performer, genre, price, day, image } = req.body;
        const newConcert = new Concerts({ performer, genre, price, day, image });
        await newConcert.save();
        res.json(newConcert);
    } catch (err) {
        res.status(500), json({ message: err });
    }
}

exports.update = async (req, res) => {
    try {
        const { performer, genre, price, day, image } = req.body;
        const conc = await (Concerts.findById(req.params.id));
        if (conc) {
            conc.performer = performer;
            conc.genre = genre;
            conc.price = price;
            conc.day = day;
            conc.image = image;
            await conc.save();
            res.json(conc);
        } else res.status(404).json({ message: 'Not found...' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

exports.delete = async (req, res) => {
    try {
        const conc = await (Concerts.findById(req.params.id));
        if (conc) {
            await Concerts.remove({ _id: req.params.id });
        } else res.status(404).json({ message: 'Not found...' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}