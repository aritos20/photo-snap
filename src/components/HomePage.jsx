import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import RenderImages from './RenderImages'
import Search from './Search'

const HomePage = () => {
  return (
    <>
        <NavBar link="/my-photos" button="My Photos"/>
        <Search />
        <RenderImages />
        <Footer />
    </>
  )
}

export default HomePage;