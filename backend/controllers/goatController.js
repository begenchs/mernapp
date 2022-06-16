const asyncHandler = require('express-async-handler')

// @description Get goat
// @route       GET /api/goats
// @access      Private
const getGoat = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goats'})
})

// @description Set goat
// @route       POST /api/goats
// @access      Private
const setGoat = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set goat'})
})

// @description Update goat
// @route       PUT /api/goats/:id
// @access      Private
const updateGoat = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update goats ${req.params.id}`})
})

// @description Delete goat
// @route       DELETE /api/goats/:id
// @access      Private
const deleteGoat = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete goats ${req.params.id}`})
})

module.exports = {
    getGoat,
    setGoat,
    updateGoat,
    deleteGoat
}