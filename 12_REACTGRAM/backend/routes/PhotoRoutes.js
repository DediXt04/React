const express = require("express")
const router = express.Router()

//CONTROLLER
const { insertPhoto, deletePhoto } = require("../controllers/PhotoController")

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

router.delete("/:id", authGuard, deletePhoto)



module.exports = router