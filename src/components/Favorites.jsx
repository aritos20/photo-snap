import NavBar from './NavBar'
import Cards from './Cards';
import { useSelector } from 'react-redux';
import FilterByDescription from './FilterByDescription';
import { ImageList } from '@mui/material';
import { Container } from '@mui/system';

const Favorites = () => {
  const favsImgs = useSelector(state => state.favoritesImgs.list);  


  return (
    <>
        <NavBar link="/" button="Inicio"/>
        <FilterByDescription />
        <Container>
          <ImageList gap={24} sx={{
            mb: 8,
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr)) !important',
          }}>
            {favsImgs.map(item => (
              <Cards key={item.id}
                    item={item}/>
            ))}
            </ImageList>
        </Container>
    </>
  )
}

export default Favorites;