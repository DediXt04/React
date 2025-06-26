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
const getUserPhotos = async (id, token) => {
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

const deletePhoto = async (id, token) => {

    const config = requestConfig("DELETE", null, token)

    try {

        const res = await fetch(api + "/photos/" + id, config).then((res) => res.json()).catch((err) => err)

        return res

    } catch (error) {
        console.log(error)
    }
}

//Update
const updatePhoto = async (data, id, token) => {
    const config = requestConfig("PUT", data, token)

    try {

        const res = await fetch(api + "/photos/" + id, config).then((res) => res.json()).catch((err) => err)

        return res

    } catch (error) {
        console.log(error)
    }
}

// Get a photo by id
const getPhoto = async (id, token) => {
    const config = requestConfig("GET", null, token);

    try {
        const response = await fetch(api + "/photos/" + id, config);

        // se o status for erro (404, 500, etc), já lança erro
        if (!response.ok) {
            throw new Error("Erro ao buscar a foto: " + response.status);
        }

        const data = await response.json();

        // verificação básica: o objeto tem campos esperados?
        if (!data || !data.image) {
            throw new Error("Foto inválida ou não encontrada");
        }

        console.log("Data no getPhoto", data)
        return data;

    } catch (error) {
        console.log("Erro em getPhoto:", error);
        throw error; // importante lançar o erro para o createAsyncThunk saber
    }
}

const like = async (id, token) => {

    const config = requestConfig("PUT", null, token)

    try {
        const res = await fetch(api + "/photos/like/" + id, config).then((res) => res.json()).catch(err => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

//add comment
const comment = async (data, id, token) => {
    const config = requestConfig("PUT", data, token)
    try {
        const res = await fetch(api + "/photos/comment/" + id, config)
            .then((res) => res.json())
            .catch(err => err)

        return res
    } catch (error) {
        console.log(error)
    }
}

const getPhotos = async() => {

    const config = requestConfig("GET")

    try {
        const res = await fetch(api + "/photos", config)
            .then((res) => res.json())
            .catch(err => err)
        return res
    } catch (error) {
        console.log(error)
        
    }
}

const photoService = {
    publishPhoto,
    getUserPhotos,
    deletePhoto,
    updatePhoto,
    getPhoto,
    like,
    comment,
    getPhotos,
}

export default photoService;
