const express = require("express")
const router = express.Router()

//CONTROLLER
const { insertPhoto } = require("../controllers/PhotoController")

//MIDDLEWARES
const { photoInsertValidation } = require("../middlewares/photoValidation")
const authGuard = require("../middlewares/authGuard")
const validate = require("../middlewares/handleValidations")
const { imageUpload } = require("../middlewares/imageUpload")

//ROUTES
router.post(
    "/",
    authGuard,
    imageUpload.single("image"), // ← precisa vir antes da validação
    photoInsertValidation(),     // ← agora pode validar req.file
    validate,
    insertPhoto
)



module.exports = router