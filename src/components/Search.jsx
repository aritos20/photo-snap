import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getApiData } from '../features/search/searchSlice';
import main_background from '../assets/main_background.png';
import TextField from '@mui/material/TextField';
import '../css/search.css'
import { Button } from '@mui/material';

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
            <img src={main_background} className="main-img" />
            <div className='input-button'>
                <form onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" label="Search..." variant="outlined" value={searchValue} onChange={handleChange} />
                </form>
                <Button variant="contained" onClick={handleClick}>Search</Button>
            </div>
            
        </>
    )
}

export default Search;