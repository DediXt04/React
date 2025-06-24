import { api, requestConfig } from '../utils/config'

// Publish an user photo
const publishPhoto = async (data, token) => {
    const config = requestConfig("POST", data, token, true)
    try {
        const res = await fetch(api + "/photos", config)
        const json = await res.json()

        if (!res.ok) {
            throw new Error(json.errors ? json.errors[0] : "Erro desconhecido ao publicar foto.");
        }
        return json

    } catch (error) {
        console.log(error)
        throw error // Re-lançar o erro para que o thunk possa capturá-lo
    }
}

// Get photos by user
const getUserPhotos = async(id, token) => {
    const config = requestConfig("GET", null, token)
    try {
        const res = await fetch(api + "/photos/user/" + id, config)
        const json = await res.json()

        if (!res.ok) { // Verifica se a resposta HTTP foi bem-sucedida (status 2xx)
            throw new Error(json.errors ? json.errors[0] : "Erro desconhecido ao buscar fotos.");
        }
        return json // Retorna os dados (que devem ser um array de fotos)

    } catch (error) {
        console.log(error)
        throw error // Re-lança o erro para que o createAsyncThunk possa capturá-lo
    }
}

const deletePhoto = async(id, token) => {

    const config = requestConfig("DELETE", null, token)

    try {
        
        const res = await fetch(api + "/photos/" + id, config).then((res) => res.json()).catch((err) => err)

        return res

    } catch (error) {
        console.log(error)
    }
}

const photoService = {
    publishPhoto,
    getUserPhotos,
    deletePhoto,
}

export default photoService;
