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
    async (id, thunkAPI) => {
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
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        try {
            const data = await photoService.deletePhoto(id, token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    }
)

export const updatePhoto = createAsyncThunk(
    "photo/update",
    async (photoData, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        try {
            const data = await photoService.updatePhoto(
                { title: photoData.title },
                photoData.id,
                token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getPhoto = createAsyncThunk(
    "photo/getphoto",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        try {
            const data = await photoService.getPhoto(id, token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const like = createAsyncThunk(
    "photo/like",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        try {
            const data = await photoService.like(id, token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const comment = createAsyncThunk(
    "photo/comment",
    async (commentData, thunkAPI) => {

        const token = thunkAPI.getState().auth.user.token;
        try {
            const data = await photoService.comment({ comment: commentData.comment }, commentData.id, token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    }
)

export const getPhotos =  createAsyncThunk(
    "photo/getall",
    async() =>{
        const data = await photoService.getPhotos()
        
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
            .addCase(publishPhoto.rejected, (state, action) => {
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
            .addCase(deletePhoto.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.photo = {};
            })
            .addCase(updatePhoto.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(updatePhoto.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.photos.map((photo) => {
                    if (photo._id === action.payload.photo._id) {
                        return photo.title = action.payload.photo.title
                    }
                    return photo
                })

                state.message = action.payload.message
            })
            .addCase(updatePhoto.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.photo = {};
            })
            .addCase(getPhoto.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getPhoto.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.photo = action.payload; // action.payload deve ser um array aqui
            })
            .addCase(like.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;

                if (state.photo._id === action.payload._id) {
                    state.photo.likes = action.payload.likes;
                }


                if (action.payload?._id && action.payload?.likes) {
                    state.photos = state.photos.map((photo) => {
                        if (photo._id === action.payload._id) {
                            return {
                                ...photo,
                                likes: action.payload.likes
                            }
                        }
                        return photo
                    });
                }


                state.message = action.payload.message
            })
            .addCase(like.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.photo = {};
            })
            .addCase(comment.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;

                // Verifica se 'comments' existe antes de usar 'push'
                if (state.photo && Array.isArray(state.photo.comments)) {
                    state.photo.comments.push(action.payload.comment);
                } else if (state.photo) {
                    // Se comments não existir ainda, inicializa como array
                    state.photo.comments = [action.payload.comment];
                }

                state.message = action.payload.message;
            })
            .addCase(comment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getPhotos.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.photos = action.payload; // action.payload deve ser um array aqui
            })
    }
})

export const { resetMessage } = photoSlice.actions
export default photoSlice.reducer;
