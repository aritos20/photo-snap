import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container } from '@mui/material';
import { deleteImageFromMyFavorites } from '../features/favorites/favoritesSlice';

const Cards = () => {
    const dispatch = useDispatch();
    const favsImgs = useSelector(state => state.favoritesImgs.list);
    console.log(favsImgs);

    const handleDeleteClick = (item) => {
        dispatch(deleteImageFromMyFavorites(item));
    }

    return (
        <>
            <Container>
                {favsImgs.map(item => (
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
                    <CardActions>
                        {/* <Button size="small" onClick={handleClick}>Download</Button> */}
                        <Button size="small" onClick={() => handleDeleteClick(item)}>Delete</Button>
                    </CardActions> 
                </Card>))}
            </Container>
        </>
    )
}

export default Cards