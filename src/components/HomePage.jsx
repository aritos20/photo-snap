import React from 'react'
import NavBar from './NavBar'
import RenderImages from './RenderImages'
import Search from './Search'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
        <NavBar link="/my-photos" button="My Photos"/>
        <Search />
        <RenderImages />
    </>
  )
}

export default HomePage