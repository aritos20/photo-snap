import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const api_key = process.env.REACT_APP_APIKEY;

const initialState = {
    list: []
}

// export const getApiData = () => alert('kk');
export const getApiData = createAsyncThunk(
    'search/getApiData',
    async () => {
        try {
            const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${api_key}`);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            alert(error);
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