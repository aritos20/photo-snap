import React from 'react'
import NavBar from './NavBar'
import RenderImages from './RenderImages'
import Search from './Search'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
        <Link to="/my-photos">My Photos</Link>
        <NavBar />
        <Search />
        <RenderImages />
    </>
  )
}

export default HomePage