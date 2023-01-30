import React, { useState } from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { Card, Container } from '@mui/material';
import { deleteImageFromMyFavorites } from '../features/favorites/favoritesSlice';
import ModalEditDescription from './ModalEditDescription';

const Cards = ({item}) => {
    const dispatch = useDispatch();
    // const favsImgs = useSelector(state => state.favoritesImgs.list);

    const [isOpen, setIsOpen] = useState(false);

    const handleDeleteClick = (item) => {
        dispatch(deleteImageFromMyFavorites(item));
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
                        sx={{ height: 140 }}
                        image={item.urls.small}
                        title={item.description}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button size="small" onClick={handleClickDescription}>Edit description</Button>
                        <Button size="small" onClick={() => handleDeleteClick(item.id)}>Delete</Button>
                    </CardActions>
                    <ModalEditDescription isOpen={isOpen} handleClose={handleClose} id={item.id}/> 
                </Card>
            </Container>
        </>
    )
}

export default Cards