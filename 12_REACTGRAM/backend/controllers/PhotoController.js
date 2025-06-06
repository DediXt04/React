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
    });
    
    await newPhoto.save(); // 👈 salva no banco!
    
    res.status(201).json(newPhoto);
    

    //If photo was created successfully, return data
    if (!newPhoto) {
        return res.status(422).json({ errors: ["Houve um erro, tente novamente mais tarde!"] })
    }


}

const deletePhoto = async (req, res) => {
    const { id } = req.params
    const reqUser = req.user

    try {
        const photo = await Photo.findById(id)

        if (!photo) {
            return res.status(404).json({ errors: ["Foto não encontrada!"] })
        }

        if (!photo.userId.equals(reqUser._id)) {
            return res.status(403).json({ errors: ["Você não tem permissão para deletar esta foto."] })
        }

        await Photo.findByIdAndDelete(photo._id)
        return res.status(200).json({ id: photo._id, message: "Foto removida com sucesso!" })

    } catch (error) {
        return res.status(500).json({ errors: ["Erro interno no servidor."] })
    }
}


module.exports = {
    insertPhoto,
    deletePhoto
}