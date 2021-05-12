const Testimonials = require('../models/testimonials.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Testimonials.find());
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getRandom = async (req, res) => {
    try {
        const count = await Testimonials.countDocuments();
        const rand = Math.floor(Math.random() * count);
        const test = await Testimonials.findOne().skip(rand);
        if (!test) res.status(404).json({ message: 'Not found...' });
        else res.json(test);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getById = async (req, res) => {
    try {
        const test = await Testimonials.findById(req.params.id);
        if (!test) res.status(404).json({ message: 'Not found...' });
        else res.json(test);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

exports.post = async (req, res) => {
    try {
        const { author, text } = req.body;
        const newTestimonial = new Testimonials({ author: author, text: text });
        await newTestimonial.save();
        res.json(newTestimonial);
    } catch (err) {
        res.status(500), json({ message: err });
    }
}

exports.update = async (req, res) => {
    try {
        const { author, text } = req.body;
        const test = await (Testimonials.findById(req.params.id));
        if (test) {
            test.author = author;
            test.text = text;
            await test.save();
            res.json(test);
        } else res.status(404).json({ message: 'Not found...' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

exports.delete = async (req, res) => {
    try {
        const test = await (Testimonials.findById(req.params.id));
        if (test) {
            await Testimonials.remove({ _id: req.params.id });
        } else res.status(404).json({ message: 'Not found...' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}