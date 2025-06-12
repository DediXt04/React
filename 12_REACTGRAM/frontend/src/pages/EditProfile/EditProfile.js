import "./EditProfile.css";

import { uploads } from "../../utils/config";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { profile, resetMessage } from "../../slices/userSlice";

import Message from "../../components/Message";

const EditProfile = () => {
    const dispatch = useDispatch();

    const { user, message, error, loading } = useSelector((state) => state.user)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [bio, setBio] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    useEffect(() => {
        dispatch(profile())
    }, [dispatch])

    useEffect(() => {
        if(user){
            setName(user.name)
            setEmail(user.email)
            setBio(user.bio)
            setProfileImage(user.profileImage)
            setPreviewImage(user.profileImage ? uploads + user.profileImage : "")
        }
    }, [user])

    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário enviado");
    }


    return (
        <div id="edit-profile">
            <h2>Edite seus dados</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name || ""} />
                <input type="email" placeholder="E-mail" disabled value={email || ""} />
                <label>
                    <span>Imagem do Perfil:</span>
                    <input type="file" />
                </label>
                <label>
                    <span>Bio:</span>
                    <input type="text" placeholder="Descrição do perfil" onChange={(e) => setBio(e.target.value)} value={bio || ""} />
                </label>
                <label>
                    <span>Quer alterar sua senha?</span>
                    <input type="password" placeholder="Digite sua nova senha" onChange={(e) => setPassword(e.target.value)} value={password || ""} />
                </label>
                <input type="submit" value="Atualizar" />
            </form>

        </div>
    )
}

export default EditProfile