const express = require('express');
const router = express.Router();
const readingListCtrl = require('../../controllers/api/readingList')


//routes

///does this /have to match my ReadingList link in app?
router.post('/ReadingList', readingListCtrl.addtoFave);

module.exports = router;