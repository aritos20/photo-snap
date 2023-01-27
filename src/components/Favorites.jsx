import React from 'react'
import ButtonAppBar from './AppBar'

import { Link } from 'react-router-dom';
import Cards from './Cards';

const Favorites = () => {
    

  return (
    <>
        <Link to="/">Inicio</Link>
        <ButtonAppBar />
        <Cards />
    </>
  )
}


export default Favorites