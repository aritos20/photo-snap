import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiData } from '../features/search/searchSlice';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getApiData())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getApiData(searchValue))
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search...' value={searchValue} onChange={handleChange}/>
            </form>
            <button onClick={handleClick}>tu vieja 13</button>
        </>
    )
}

export default Search;