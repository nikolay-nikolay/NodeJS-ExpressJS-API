const express = require('express');
const { getContacts } = require('../controllers/api-contact-controller');

const router = express.Router();

router.get('/api/contacts', getContacts);

module.exports = router;