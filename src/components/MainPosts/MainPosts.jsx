import React from 'react'
import './MainPosts.css'
import { Box } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

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

    {/* main-posts-descriptions */ }

      <Box className="main-posts-descriptions">
      <Box className="main-post-icones" >
        <FavoriteBorderOutlinedIcon className='main-post-icones-components'/>
        <ChatBubbleOutlineOutlinedIcon className='main-post-icones-components'/>
        <ShareOutlinedIcon className='main-post-icones-components'/>
      </Box>
      <Box className="main-post-save" >
        <BookmarkBorderOutlinedIcon className='main-post-icones-components'/>
      </Box>
      </Box>

      {/* main-post-transitions */}

      <Box className="main-post-transitions"> 
        
      <Box className="main-post-transitions-Items">
        <h4><span>365</span>Likes</h4>
      </Box>
      <Box className="main-post-transitions-Items nagetiveMargin ">
        <h6>descriptions: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quibusdam voluptas hic harum. Itaque perspiciatis minus accusantium laborum! Harum culpa deserunt necessitatibus nesciunt illo iure natus dicta aperiam voluptatem dolor!</h6>
      </Box>
      <Box className="main-post-transitions-Items nagetiveMargin ">
        <h5 style={{ color: "gray" }}>view all 65 comments</h5>
      </Box>

       </Box>
   
   
      </Box>
    </Box>
  )
}
