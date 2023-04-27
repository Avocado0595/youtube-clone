import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YoutubeClone } from "../../lib/apis";


export const loginRequest = createAsyncThunk(
    "auth/loginRequest",
    async (data, thunkAPI) => {
        try {
            const resp = await YoutubeClone.get("/auth/login");
            console.log(resp);
            if (resp === 200) return resp.data;
            throw resp;
        } catch (err) {
            throw err;
        }
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        loading: false,
        error: null,
    },
    extraReducers: {
        [loginRequest.pending]: (state, action) => {
            state.loading = true;
        },
        [loginRequest.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        }
        ,
        [loginRequest.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }

    }
})


export default authSlice.reducer;

