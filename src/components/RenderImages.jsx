import React, { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImageList from '@mui/material/ImageList';
import Fab from '@mui/material/Fab';
import { addToMyFavorites } from '../features/favorites/favoritesSlice';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function RenderImages() {
    const [open, setOpen] = useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const dispatch = useDispatch();
    let img = useSelector(state => state.searchImg.list);
    
    const handleClick = (data) => {
        let objDate = new Date();
        let date = objDate.toLocaleString();
        data = {...data, date};
        dispatch(addToMyFavorites(data));
        setOpen(true);
    }

    return (
        <>
            <ImageList sx={{ width: '100%', height: 600 }} cols={3} rowHeight={164}>
                {img.map((item) => (
                    <ImageListItem key={item.urls.small}>
                    <img
                        src={`${item.urls.small}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.urls.small}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.alt_description}
                        loading="lazy"
                    />
                     <ImageListItemBar
                        actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        >
                        <InfoIcon />
                        <Fab color="primary" aria-label="add" onClick={() => handleClick(
                            {
                                id: item.id,
                                width: item.width,
                                height: item.height,
                                likes: item.likes,
                                urls: item.urls,
                                description: item.alt_description
                            }
                        )}>
                            Save
                        </Fab>
                        </IconButton>
                        }
                    />
                    </ImageListItem>
                ))}
            </ImageList>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Image succesfully saved
                </Alert>
            </Snackbar>
        </>
    )
}

export default RenderImages;