import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { findByDescription } from '../features/favorites/favoritesSlice';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { sortBy } from '../features/favorites/favoritesSlice';


const FilterByDescription = () => {
    const [searchValue, setSearchValue] = useState('');
    const [sortByValue, setSortByValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        dispatch(findByDescription(e.target.value));
    }
  
    const handleSelectChange = (e) => {
      setSortByValue(e.target.value);
      if (e.target.value === 'none') {
        setSearchValue('');
      }
      dispatch(sortBy(e.target.value));
    };

  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'center', gap: '24px', width: '100%', mt: 3}}>
          <input style={{width: '40%'}}  type="text" placeholder='Find an image by description...' value={searchValue} onChange={handleChange}/>
          <Box sx={{ width: '30%' }}>
            <FormControl sx={{width: '100%'}}>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortByValue}
                label="sortBy"
                onChange={handleSelectChange}
                >
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="width">Width</MenuItem>
                <MenuItem value="height">Height</MenuItem>
                <MenuItem value="likes">Likes</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                </Select>
            </FormControl>
          </Box>
        </Box>
    </>
  )
}

export default FilterByDescription