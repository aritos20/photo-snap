import React, { useState } from 'react'
import NavBar from './NavBar'
import PaginationComp from './PaginationComp'
import RenderImages from './RenderImages'
import Search from './Search'

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
        <NavBar link="/my-photos" button="My Photos"/>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <RenderImages />
        <PaginationComp searchValue={searchValue} />
    </>
  )
}

export default HomePage;