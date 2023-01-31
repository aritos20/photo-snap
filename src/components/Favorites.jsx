import NavBar from './NavBar'
import Cards from './Cards';
import { useSelector } from 'react-redux';
import FilterByDescription from './FilterByDescription';

const Favorites = () => {
  const favsImgs = useSelector(state => state.favoritesImgs.list);  


  return (
    <>
        <NavBar link="/" button="Inicio"/>
        <FilterByDescription />
        {favsImgs.map(item => (
          <Cards key={item.id}
                 item={item}/>
        ))}
    </>
  )
}

export default Favorites