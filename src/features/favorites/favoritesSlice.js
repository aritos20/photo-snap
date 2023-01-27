import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: JSON.parse(localStorage.getItem('myFavorites')) || []
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToMyFavorites: (state, action) => {
            if (state.list.some(item => item.id === action.payload.id)) {
                state.list = [...state.list];
            } else {
                state.list = [...state.list, action.payload];
                localStorage.setItem('myFavorites', JSON.stringify(state.list));
            }
        },
        deleteImageFromMyFavorites: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload.id);
            localStorage.setItem('myFavorites', JSON.stringify(state.list));

        }
    }
})

export default favoritesSlice.reducer;
export const { addToMyFavorites, deleteImageFromMyFavorites } = favoritesSlice.actions;