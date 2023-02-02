import React, { useState } from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { Card, Container } from '@mui/material';
import { deleteImageFromMyFavorites } from '../features/favorites/favoritesSlice';
import ModalEditDescription from './ModalEditDescription';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import { saveAs } from "file-saver";
import EditIcon from '@mui/icons-material/Edit';

const Cards = ({item}) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const handleDeleteClick = (item) => {
        dispatch(deleteImageFromMyFavorites(item));
    }

    const handleDownload = (url) => {
        saveAs(url);
    }

    const handleClickDescription = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Container>
                <Card>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={item.urls.small}
                        title={item.description}
                    />
                    <CardContent sx={{height: 275, textAlign: 'left'}}>
                        <p>Width: {item.width}</p>
                        <p>Height: {item.height}</p>
                        <p>Likes: {item.likes}</p>
                        <p>Date Added: {item.date}</p>
                        <Typography variant="body2" color="text.secondary">
                            Description: {item.description}
                        </Typography>
                        <Tooltip title="Edit the description">
                            <EditIcon sx={{mt: 1}} onClick={handleClickDescription}/>
                        </Tooltip>
                    </CardContent>
                    <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Tooltip title="Donwload the image">
                            <Fab color='primary' aria-label="download" variant='extended' style={{background: '#FF8E3C'}} onClick={() => handleDownload(item.urls.full)}>
                                Download
                            </Fab>
                        </Tooltip>
                        <Tooltip title="Delete the image from favorites">
                            <Fab color='primary' aria-label="delete" variant='extended' style={{background: '#FF8E3C'}} onClick={() => handleDeleteClick(item.id)}>
                                Delete
                            </Fab>
                        </Tooltip>
                    </CardActions>
                    <ModalEditDescription isOpen={isOpen} handleClose={handleClose} id={item.id}/> 
                </Card>
            </Container>
        </>
    )
}

export default Cards;