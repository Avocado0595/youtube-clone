import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {YoutubeClone} from "../../lib/apis";

//  action creator asynchronous get video by category
const getVideoByCategory = createAsyncThunk(
    "videoFilter/getVideoByCategory",
    async (data, thunkAPI) => {
        try {
            const resp = await YoutubeClone.get(`videos?category=${data}`);
            if (resp.status === 200) return resp.data.videos;
            throw resp;
        } catch (err) {
            throw err;
        }
    }
);


const videoFilterSlice = createSlice({
    name: "videoFilter",
    initialState: {
        videos: [],
        loading: null,
        error: null,
        selectingCategory: "all",
    },

    reducers: {
        saveCategory: (state, action) => {
            state.selectingCategory = action.payload;
        },
    },

    extraReducers: {
        [getVideoByCategory.pending]: (state, action) => {
            state.loading = true;
        },

        [getVideoByCategory.fulfilled]: (state, action) => {
            state.videos = action.payload;
            state.loading = false;
        },

        [getVideoByCategory.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
    },
});

export default videoFilterSlice.reducer;

export const videoFilterSelector = (state) => state.videoFilter;

// actions
export const {saveCategory} = videoFilterSlice.actions;
export {getVideoByCategory};
