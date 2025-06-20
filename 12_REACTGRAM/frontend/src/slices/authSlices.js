import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../services/authService';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    error: null, // Ajustado de 'false' para 'null'
    success: false,
    loading: false,
};

export const register = createAsyncThunk("auth/register",
    async (user, thunkAPI) => {
        const data = await authService.register(user);

        // Corrigido para 'erros', como o backend realmente retorna
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors.join(" | ")); // Mostra todos os erros juntos
        }

        return data;
    }
)

// Logout an user
export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
})

export const login = createAsyncThunk("auth/login",
    async (user, thunkAPI) => {
        const data = await authService.login(user);

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors.join(" | "));
        }

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors.join(" | "));
        }

        return data;
    }
);


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = null; // Ajustado de 'false' para 'null'
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.user = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.user = null;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.user = null;
            })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;
