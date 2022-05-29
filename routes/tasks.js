const express = require('express');
const router = express.Router();
const { getTasks } = require('../controllers/tasks');

router.route('/').get(getTasks);

module.exports = router;
