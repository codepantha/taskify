const express = require('express');
const router = express.Router();
const {
  index,
  show,
  create,
  update,
  destroy
} = require('../controllers/tasks');

router.route('/').get(index).post(create);
router.route('/:id').get(show).patch(update).delete(destroy);

module.exports = router;
