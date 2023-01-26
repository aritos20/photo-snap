import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiData } from '../features/search/searchSlice';
import TextField from '@mui/material/TextField';

function Search() {
    const dispatch = useDispatch();
    const img = useSelector(state => state.searchImg.list.urls !== undefined && state.searchImg.list.urls.small)

    const handleClick = () => {
        dispatch(getApiData())
    }

    return (
        <>
            <h1>Hola</h1>
            <button onClick={handleClick}>tu vieja 13</button>
            <img src={img} />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </>
    )
}

export default Search;