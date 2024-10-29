import React from 'react'
import './Explore.css'
import { Box, Divider } from '@mui/material'
import Searchexplore from '../../components/searchexplore/Searchexplore'
export default function Explore() {
  return (
    <div className='Explore-main-container'>
      <Searchexplore/>
      <Divider sx={{ borderWidth: "2px" }} />
      <Box className='explore-posts-container'>


      <Box className='gridPostes' ></Box>
      <Box className='gridPostes' ></Box>
      <Box className='gridPostes' ></Box>
      <Box className='gridPostes' ></Box>
      <Box className='gridPostes' ></Box>
      <Box className='gridPostes' ></Box>
      <Box className='gridPostes' ></Box>
      <Box className='gridPostes' ></Box>
      <Box className='gridPostes' ></Box> 
      
    
      <Box className='gridPostes-2' ></Box>
      <Box className='gridPostes-2' ></Box>
      <Box className='gridPostes-2' ></Box>
      <Box className='gridPostes-2' ></Box>
      <Box className='gridPostes-2' ></Box>
      <Box className='gridPostes-2' ></Box>
      <Box className='gridPostes-2' ></Box>
      <Box className='gridPostes-2' ></Box>
      <Box className='gridPostes-2' ></Box> 
      
    </Box>
    </div>
  )
}


