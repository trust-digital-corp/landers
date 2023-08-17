const express = require('express');
const router  = express.Router();
const leadController = require('../controllers/lead');

router.post('/lead', leadController.newLead);
router.post('/contact', leadController.newContact);

module.exports = router;
