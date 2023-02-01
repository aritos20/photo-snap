import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const api_key = process.env.REACT_APP_APIKEY;

const initialState = {
    list: []
}

// export const getApiData = () => alert('kk');
export const getApiData = createAsyncThunk(
    'search/getApiData',
    async (arg) => {
        try {
            if (!arg || arg === '') {
                const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${api_key}&count=30`);
                const data = await response.json();
                return [...data];
            } else {
                const response = await fetch(`https://api.unsplash.com/search/photos?client_id=${api_key}&query=${arg}&per_page=30`);
                const data = await response.json();
                return [...data.results];
            }

        } catch (error) {
            alert(`Failed the connection to return the images please try again later ${error}`);
        }
    }
)

export const searchSlice = createSlice({
    name: "search",
    initialState,
    extraReducers: {
        [getApiData.pending]: (state) => {
            console.log("Loading...");
        },
        [getApiData.fulfilled]: (state, action) => {
            state.list = action.payload;
        },
        [getApiData.rejected]: (state) => {
            console.log("Failed fetching the data");
        }
    }
})

export default searchSlice.reducer;