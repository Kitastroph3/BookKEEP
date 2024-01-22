const Book = require("../../models/book")
const User = require('../../models/user')

module.exports = { addBook }

//this user wants to add a book. server says ok go to controller to handle it

async function addBook(req, res) {
        const { title, author } = req.body;
        try {
            let user = await User.findOne({email: req.body.email});
      
            //no user ided
            if (!user) {
              return res.status(404).json({ error: 'User not found' });
          }
          
            //make a new book
            const newBook = new Book({ title, author });
            user.books.push(newBook);
            
            await user.save();
        
            res.json({ message: 'Book added to reading list successfully' });
          } catch (error) {
            console.error('Problem adding book to reading list:', error);
            res.status(500).json({ error: 'Internal server error' });
          }
        }

