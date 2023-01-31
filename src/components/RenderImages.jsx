import React, { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import Fab from '@mui/material/Fab';
import { addToMyFavorites } from '../features/favorites/favoritesSlice';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Container } from '@mui/system';
import { Card } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {saveAs} from "file-saver";

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
    
    const handleDownload = (url) => {
        saveAs(url);
    }

    const handleClick = (data) => {
        let objDate = new Date();
        let date = objDate.toLocaleString();
        data = {...data, date};
        dispatch(addToMyFavorites(data));
        setOpen(true);
    }

    return (
        <>
            <Container>
                <ImageList gap={24} sx={{
                mb: 8,
                gridTemplateColumns:
                    'repeat(auto-fill, minmax(280px, 1fr)) !important',
                }}>
                {img.map(item => (
                    <Card key={item.id}>
                        <ImageListItem sx={{height: '100% !important'}}>
                            <img
                            src={`${item.urls.small_s3}`}
                            srcSet={`${item.urls.small_s3}`}
                            alt={item.alt_description}
                            loading="lazy"
                            />
                            <ImageListItemBar style={{display: 'flex', justifyContent: 'space-around'}}
                            actionIcon={
                                <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                >
                                <Fab color="primary" aria-label="add" variant='extended' onClick={() => handleDownload(item.urls.full)}>
                                    Download
                                    <AddIcon />
                                </Fab>
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
                            }/>
                        </ImageListItem>
                    </Card>
                ))}   
                </ImageList>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Image succesfully saved!
                    </Alert>
                </Snackbar>
            </Container>
        </>
    )
}

export default RenderImages;