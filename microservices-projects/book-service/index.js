const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/books', {
    useNewUrlParser: true, // Optional in newer versions
    useUnifiedTopology: true // Optional in newer versions
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// Book Schema
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
});

const Book = mongoose.model('Book', bookSchema);

// Routes
app.post('/books', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).send(book);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).send('Book not found');
        }
        res.status(200).send(book);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Start the server
app.listen(3001, () => {
    console.log('Book Service is running on port 3001');
});
