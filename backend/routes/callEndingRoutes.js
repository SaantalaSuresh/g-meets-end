const express = require('express');
const callEndingController = require('../controllers/callEndingController');

const router = express.Router();

router.post('/end', callEndingController.endCall);

module.exports = router;
