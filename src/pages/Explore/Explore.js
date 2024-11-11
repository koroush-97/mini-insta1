import React from 'react'
import './Explore.css'
import { Box, Divider } from '@mui/material'
import Searchexplore from '../../components/searchexplore/Searchexplore'
import ExplorePostes from '../../components/ExplorePostes/ExplorePostes'


export default function Explore() {
  return (
    <div className='Explore-main-container'>
      <Searchexplore/>
      <Divider sx={{ borderWidth: "2px" }} />
      <Box className='explore-posts-container'>

      <ExplorePostes />
      
    </Box>
    </div>
  )
}


