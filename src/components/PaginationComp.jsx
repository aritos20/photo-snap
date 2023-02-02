import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux';
import { getApiData } from '../features/search/searchSlice';

const PaginationComp = ({searchValue}) => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
      setPage(value);
      dispatch(getApiData({searchValue, value}))
    }

  return (
    <>
        <Pagination count={10} page={page} onChange={handleChange} style={{display: 'flex', justifyContent: 'center', marginBottom: '32px'}}/>
    </>
  )
}

export default PaginationComp;