import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { sortBy } from '../features/favorites/favoritesSlice';

export default function SortBy() {
  const [sortByValue, setSortByValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSortByValue(e.target.value);
    dispatch(sortBy(e.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortByValue}
          label="sortBy"
          onChange={handleChange}
        >
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="width">Width</MenuItem>
          <MenuItem value="height">Height</MenuItem>
          <MenuItem value="likes">Likes</MenuItem>
          <MenuItem value="date">Date</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}