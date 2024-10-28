import React from 'react'
import './Mainpage.css'
import SearchBox from '../../components/Searchbox/SearchBox'
import Slidercercles from '../../components/slidercerclies/Slidercercles'
import MainPosts from '../../components/MainPosts/MainPosts'
import Divider from '@mui/material/Divider';


export default function Mainpage() {
  return (
    <div className='MainpageContainer'>
      <SearchBox />
      <Divider sx={{ borderWidth: "2px" }} />
        <Slidercercles style={{height: "1170px"  }}/>
        <Divider sx={{ borderWidth: "2px" }} />
      <MainPosts />   
    </div>
  )
}
