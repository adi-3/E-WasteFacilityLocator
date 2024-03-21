const express = require('express');
const router = express.Router();

// GET route for displaying the search page
router.get('/', (req, res) => {
    res.render('search'); // Assuming you have a search.ejs file for the search page
});

// POST route for handling search form submission
router.post('/search', (req, res) => {
    // Handle search form submission logic here
});

module.exports = router;