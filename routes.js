const express = require('express')
const router = new express.Router()
const userController = require('./controller/userController')
const detailsController = require('./controller/detailController')


router.post('/register',userController.registerController)

router.post('/add-details',detailsController.addDetailsController)

router.get('/all-details',detailsController.getAllDetailsController)

module.exports = router