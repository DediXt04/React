const express = require("express")
const router = express.Router()

//CONTROLLER

//MIDDLEWARES
const {photoInsertValidation} = require("../middlewares/photoValidation")
const authGuard = require("../middlewares/authGuard") 
const validate = require("../middlewares/handleValidations")

//ROUTES

module.exports = router