import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice'
import favoriteReducer from '../features/favorites/favoritesSlice'

export const store = configureStore({
  reducer: {
    searchImg: searchReducer,
    favoritesImgs: favoriteReducer
  }
});
