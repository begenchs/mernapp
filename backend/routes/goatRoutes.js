const express = require('express')
const router = express.Router()
const { getGoat, setGoat, updateGoat, deleteGoat } = require('../controllers/goatController')

router.get('/', getGoat)

router.post('/', setGoat)

router.put('/:id', updateGoat)

router.delete('/:id', deleteGoat)


module.exports = router