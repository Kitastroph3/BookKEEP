const express = require('express');
const router = express.Router();
const books = require('../../controllers/api/books')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//routes say this is what the user wants to do. CRUD
router.post('/books', books.addBook);

module.exports = router;