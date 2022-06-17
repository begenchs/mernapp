const express = require('express')
const router = express.Router()
const { getGoat, setGoat, updateGoat, deleteGoat } = require('../controllers/goatController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getGoat)

router.post('/', protect, setGoat)

router.put('/:id', protect, updateGoat)

router.delete('/:id', protect, deleteGoat)


module.exports = router