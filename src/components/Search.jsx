import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getApiData } from '../features/search/searchSlice';
import main_background from '../assets/main_background.png';
import logo from '../assets/logo.png'
import '../css/styles.css'
import { Button } from '@mui/material';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApiData());
    }, []);

    const handleClick = () => {
        if (searchValue === '') {
            dispatch(getApiData())
        } else {
            dispatch(getApiData(searchValue))
            setSearchValue('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getApiData(searchValue))
        setSearchValue('');
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    
    return (
        <>
            <div className='search'>
            <img src={main_background} alt="a waterfall" className="main-img" />
                <div className='logo'>
                    <img src={logo} alt="the logo of the page which is a camera"/>
                </div>
                <div className='input-button'>
                    <form onSubmit={handleSubmit}>
                        <input className='search-input' type="text" placeholder='Search...' value={searchValue} onChange={handleChange} />
                    </form>
                    <Button style={{background: '#FF8E3C'}}  variant="contained" onClick={handleClick}>Search</Button>
                </div>
            </div>
        </>
    )
}

export default Search;