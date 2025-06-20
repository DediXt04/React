import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import photoService from "../services/photoService"


const initialState = {
    photos: [],
    photo: {},
    error: false,
    success: false,
    loading: false,           // para "publishPhoto"
    loadingPhotos: false,     // para "getUserPhotos"
    message: null
}


export const publishPhoto = createAsyncThunk(
    "photo/publish",
    async (photo, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token

        const data = await photoService.publishPhoto(photo, token)

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

export const getUserPhotos = createAsyncThunk(
    "photo/userPhotos",
    async (id, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token

        const data = await photoService.getUserPhotos(id, token)

        return data
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
                state.error = null;
            })
            .addCase(publishPhoto.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.photo = action.payload;
                state.photos.unshift(state.photo);
                state.message = "Foto publicada com sucesso!";
            })
            .addCase(publishPhoto.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.photo = {};
            })

            // Aqui está o getUserPhotos corrigido:
            .addCase(getUserPhotos.pending, (state) => {
                state.loadingPhotos = true;
                state.error = null;
            })
            .addCase(getUserPhotos.fulfilled, (state, action) => {
                state.loadingPhotos = false;
                state.success = true;
                state.error = null;
                state.photos = action.payload; // corrigido: antes estava errado aqui
            })
            .addCase(getUserPhotos.rejected, (state, action) => {
                state.loadingPhotos = false;
                state.error = action.payload;
            })

    }
})

export const { resetMessage } = photoSlice.actions
export default photoSlice.reducer