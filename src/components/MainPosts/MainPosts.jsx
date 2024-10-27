import React from 'react'
import './MainPosts.css'
import { Box } from '@mui/material'
import Avatar from '@mui/material/Avatar';

export default function MainPosts() {
  return (
    <Box className="posts_container">
     
      <Box className="box-final-height" >

      <Box className="avatar-info-spred-box">
        <Box className="avatar-info" >
        <Avatar className='avatarinfo-avatar' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p className='avatar-info-p'>avatar-info</p>
        </Box>
        <Box className="spred" > <span className='spred-span'>...</span> </Box>
      </Box>

      <Box className="posts-media">
        media
      </Box>


      </Box>

    </Box>
  )
}
