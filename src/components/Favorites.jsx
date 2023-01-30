import React from 'react'
import ButtonAppBar from './NavBar'

import { Link } from 'react-router-dom';
import Cards from './Cards';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favsImgs = useSelector(state => state.favoritesImgs.list);  


  return (
    <>
        <Link to="/">Inicio</Link>
        <ButtonAppBar />
        {favsImgs.map(item => (
          <Cards key={item.id}
                 item={item}/>
        ))}
    </>
  )
}


export default Favorites