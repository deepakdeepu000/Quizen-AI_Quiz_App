const express = require('express');
const router = express.Router();
const OrgController = require('../controllers/OrgController');

// Define user routes
router.post('/OrgUsers',OrgController.registerOrganization);

module.exports = router;