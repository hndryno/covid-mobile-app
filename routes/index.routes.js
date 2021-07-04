const express = require('express')
const router = express.Router()

//routes
router.get('/', async (req, res) => {
    try{
        return res.status(200).json({
            message: 'halo'
        })

        }catch(err){
            console.log(err)
        }
})

module.exports = router