import NavBar from './NavBar'
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { useSelector } from 'react-redux';
import FilterByDescription from './FilterByDescription';

const Favorites = () => {
  const favsImgs = useSelector(state => state.favoritesImgs.list);  


  return (
    <>
        <Link to="/">Inicio</Link>
        <NavBar />
        <FilterByDescription />
        {favsImgs.map(item => (
          <Cards key={item.id}
                 item={item}/>
        ))}
    </>
  )
}

export default Favorites