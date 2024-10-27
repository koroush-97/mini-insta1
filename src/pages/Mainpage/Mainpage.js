import React from 'react'
import './Mainpage.css'
import SearchBox from '../../components/Searchbox/SearchBox'
import Slidercercles from '../../components/slidercerclies/Slidercercles'
import MainPosts from '../../components/MainPosts/MainPosts'

export default function Mainpage() {
  return (
    <div className='MainpageContainer'>
      <SearchBox />
      <p style={{  border: "2px solid red" , margin:"0" , padding: "0" , height: "100px" }}>
        <Slidercercles style={{height: "1170px"}}/>
      </p>
      <MainPosts />   
    </div>
  )
}
