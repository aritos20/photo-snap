import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { findByDescription } from '../features/favorites/favoritesSlice';


const FilterByDescription = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        dispatch(findByDescription(e.target.value));
    }

  return (
    <>
        <input type="text" placeholder='Find an image by description...' value={searchValue} onChange={handleChange}/>
    </>
  )
}

export default FilterByDescription