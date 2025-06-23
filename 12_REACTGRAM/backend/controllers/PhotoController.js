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

//get photos
const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({}).sort([["createdAt", -1]]).exec()

    return res.status(200).json(photos)
}

//get user photos
const getUserPhotos = async (req, res) => {

    const { id } = req.params

    const photos = await Photo.find({ userId: id })
        .sort([["createdAt", -1]])
        .exec()

    return res.status(200).json(photos)
}

const getPhotoById = async (req, res) => {
    const { id } = req.params

    try {
        const photo = await Photo.findById(id)

        if (!photo) {
            return res.status(404).json({ errors: ["Foto não encontrada!"] })
        }

        res.status(200).json(photo)
    } catch (error) {
        return res.status(500).json({ errors: ["Erro ao buscar foto."] })
    }
}

//Update photo
const updatePhoto = async (req, res) => {
    try {
        const { id } = req.params
        const { title } = req.body || {}
        const reqUser = req.user

        const photo = await Photo.findById(id)

        if (!photo) {
            return res.status(404).json({ errors: ["Foto não encontrada!"] })
        }

        if (!photo.userId.equals(reqUser._id)) {
            return res.status(422).json({ errors: ["Você não tem permissão para editar esta foto."] })
        }

        if (title) {
            photo.title = title
        }

        await photo.save()

        res.status(200).json({ photo, message: "Foto atualizada com sucesso!" })
    } catch (error) {
        res.status(500).json({ errors: ["Erro interno ao atualizar a foto."] })
    }
}

//like funcionality
const likePhoto = async(req, res) => {
    const {id} = req.params
    const reqUser = req.user
    const photo = await Photo.findById(id)
    if (!photo) {
        return res.status(404).json({ errors: ["Foto não encontrada!"] })
    }

    if(photo.likes.includes(reqUser._id)){
        return res.status(422).json({ errors: ["Você já curtiu esta foto!"] })
    }

    //put user id in likes array
    photo.likes.push(reqUser._id)

    photo.save()

    res.status(200).json({photoId: id, userId: reqUser._id, message: "A foto foi curtida."})

}

// Comment functionality
const commentPhoto = async (req, res) => {

    const {id} = req.params
    const {comment} = req.body

    const reqUser = req.user

    const user = await User.findById(reqUser._id)

    const photo = await Photo.findById(id)

    if (!photo) {
        return res.status(404).json({ errors: ["Foto não encontrada!"] })
    }

    //put comment in the array comments
    const userComment = {
        comment,
        userName: user.name,
        userImage: user.profileImage,
        userId: user._id,
        
    }

    photo.comments.push(userComment)

    await photo.save()

    res.status(200).json({comment: userComment, message: "Comentário adicionado com sucesso!"})

}

const serchPhotos = async (req, res) => {
    const {q} = req.query

    const photos = await Photo.find({title: new RegExp(q, "i")}).exec()

    res.status(200).json(photos)
}

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhoto,
    likePhoto,
    commentPhoto,
    serchPhotos
}