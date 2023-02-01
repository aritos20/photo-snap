import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: JSON.parse(localStorage.getItem('myFavorites')) || [],
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
            state.list = JSON.parse(localStorage.getItem('myFavorites'));
            const newArr = state.list.filter(item => item.id !== action.payload);
            state.list = newArr;
            localStorage.setItem('myFavorites', JSON.stringify(state.list));
        },
        editDescription: (state, action) => {
            state.list = state.list.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, description: action.payload.description};
                } else {
                    return item;
                }
            })
            localStorage.setItem('myFavorites', JSON.stringify(state.list));
        },
        findByDescription: (state, action) => {
            if (action.payload === '') {
                state.list = JSON.parse(localStorage.getItem('myFavorites'));
            } else {
                state.list = JSON.parse(localStorage.getItem('myFavorites'));
                state.list = state.list.filter(item => item.description.toLowerCase().includes(action.payload.toLowerCase()));
            }
        },
        sortBy: (state, action) => {
            switch (action.payload) {
                case 'none':
                    state.list = JSON.parse(localStorage.getItem('myFavorites'));
                    break;
                case 'width':
                    state.list = state.list.sort((a, b) => b.width - a.width);
                    break;
                case 'height':
                    state.list = state.list.sort((a, b) => b.height - a.height);
                    break;
                case 'likes':
                    state.list = state.list.sort((a, b) => b.likes - a.likes);
                    break;
                case 'date':
                    state.list = state.list.sort((a, b) => b.date - a.date);
                    break;
                default:
                    state.list = JSON.parse(localStorage.getItem('myFavorites'));
                    break;
            }
        }
    }
})

export default favoritesSlice.reducer;
export const { addToMyFavorites, deleteImageFromMyFavorites, editDescription, findByDescription, sortBy } = favoritesSlice.actions;