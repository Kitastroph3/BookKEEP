const ReadingList = require("../../models/fave")

module.exports = { addtoFave }

async function addtoFave(req, res) { 
   
    try {
        const newBook = new ReadingList({
            title,
            author,
        });

        await newBook.save();
        console.log("book saved")
    }
    catch (error) { 
        console.error('problem saving book:', error)
    }
}

