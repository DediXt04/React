const Photo = require("../models/Photo")
const User = require("../models/User")

const mongoose = require("mongoose")

// Insert a photo, with a user related to it
const insertPhoto = async (req, res) => {
    const { title } = req.body
    const image = req.file.filename

    const reqUser = req.user

    const user = await User.findById(reqUser.id)

    const newPhoto = new Photo({
        title,
        image,
        userId: user._id,
        userName: user.name,
    })

    //If photo was created successfully, return data
    if(!newPhoto) {
        return res.status(422).json({ errors: ["Houve um erro, tente novamente mais tarde!"] })
    }

    res.status(201).json(newPhoto)

}

module.exports = {
    insertPhoto,
}