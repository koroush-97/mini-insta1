import React from 'react'
import './MainPosts.css'
import { Box } from '@mui/material'
import Avatar from '@mui/material/Avatar';

export default function MainPosts() {
  return (
    <Box className="posts_container">
        <Box className="postes_items banafsh" >
        <Box className="avata-text">
        <Avatar className='avatar-text-avatar' alt="Remy Sharp" src="" />
            <span className='avatar-info'>avatar info</span>
        </Box>
        <Box className="sperad-box">
            <span className='sperad-box-span'>...</span>
        </Box>
        </Box>
        <Box className="postes_items sabz" > 
            <Box className='media-post'>thats  my media</Box>
         </Box>
        <Box className="postes_items red" > icones </Box>
        <Box className="postes_items zard" >texts</Box>
    </Box>
  )
}
