import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from "../services/photoService";

const initialState = {
    photos: [],
    photo: {},
    error: false,
    success: false,
    loading: false,
    message: null
}

//Publish user photo
export const publishPhoto = createAsyncThunk(
    "photo/publish",
    async (photo, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        try {
            const data = await photoService.publishPhoto(photo, token)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const getUserPhotos = createAsyncThunk(
    "photo/userphotos",
    async(id, thunkAPI)=> {
        const token = thunkAPI.getState().auth.user.token;
        try {
            const data = await photoService.getUserPhotos(id, token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deletePhoto = createAsyncThunk(
    "photo/delete",
    async(id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        try {
            const data = await photoService.deletePhoto(id, token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    }
)

export const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(publishPhoto.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(publishPhoto.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.photo = action.payload;
                state.photos.unshift(state.photo)
                state.message = "Foto publicada com sucesso!"
            })
            .addCase(publishPhoto.rejected, (state, action)=> {
                state.loading = false;
                state.error = action.payload;
                state.photo = {};
            })
            .addCase(getUserPhotos.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getUserPhotos.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.photos = action.payload; // action.payload deve ser um array aqui
            })
            .addCase(getUserPhotos.rejected, (state, action) => { // Adicionado este caso
                state.loading = false;
                state.error = action.payload; // O erro retornado pelo rejectWithValue
                state.photos = []; // Garante que photos seja um array vazio em caso de erro
            })
            .addCase(deletePhoto.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(deletePhoto.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.photos = state.photos.filter((photo) => {
                    return photo._id !== action.payload.id
                })

                state.message = action.payload.message
            })
            .addCase(deletePhoto.rejected, (state, action)=> {
                state.loading = false;
                state.error = action.payload;
                state.photo = {};
            })
    }
})

export const { resetMessage } = photoSlice.actions
export default photoSlice.reducer;
