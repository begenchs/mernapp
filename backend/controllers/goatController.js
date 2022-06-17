const asyncHandler = require('express-async-handler')
const goatModel = require('../models/goatModel')

const Goat = require('../models/goatModel')

// @description Get goat
// @route       GET /api/goats
// @access      Private
const getGoat = asyncHandler(async (req, res) => {
    const goats = await Goat.find()


    res.status(200).json(goats)
})

// @description Set goat
// @route       POST /api/goats
// @access      Private
const setGoat = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goat = await Goat.create({
        text: req.body.text
    })

    res.status(200).json(goat)
})

// @description Update goat
// @route       PUT /api/goats/:id
// @access      Private
const updateGoat = asyncHandler( async (req, res) => {
    const goat = await Goat.findById(req.params.id)

    if(!goat) {
        res.status(400)
        throw new Error('Goat not found')
    }

    const updatedGoat = await Goat.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoat)
})

// @description Delete goat
// @route       DELETE /api/goats/:id
// @access      Private
const deleteGoat = asyncHandler( async (req, res) => {
    const goat = await Goat.findById(req.params.id)

    if(!goat) {
        res.status(400)
        throw new Error('Goat not found')
    }
    await goat.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoat,
    setGoat,
    updateGoat,
    deleteGoat
}