import { api, requestConfig } from '../utils/config';

const profile = async (data, token) => {
    const config = requestConfig("GET", data, token)

    try {

        const res = await fetch(api + "/users/profile", config)
            .then((res) => res.json())
            .catch((err) => err)

        return res


    } catch (error) {
        console.log(error);

    }
}

const updateProfile = async (data, token) => {
    const config = {
        method: "PUT",
        body: data, // FormData
        headers: {
            Authorization: `Bearer ${token}`,
            // NUNCA definir 'Content-Type' aqui com FormData
        },
    };

    try {
        const res = await fetch(api + "/users/", config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
};


const userService = {
    profile,
    updateProfile
}

export default userService;