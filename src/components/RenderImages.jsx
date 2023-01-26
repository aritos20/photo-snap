import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiData } from '../features/search/searchSlice';
import ButtonAppBar from './AppBar';
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';

function RenderImages() {
    let img = useSelector(state => state.searchImg.list);
    console.log(img);

    return (
        <>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {img.map((item) => (
                    <ImageListItem key={item.urls.small}>
                    <img
                        src={`${item.urls.small}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.urls.small}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        // alt={}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}

export default RenderImages;