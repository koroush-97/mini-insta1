
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import './slidercercles.css';

export default function Slidercercles() {
  return (
    <div className='containerSlidercercles'>
      <Stack direction="row" spacing={1} className='stack'>
        <Box sx={{ display : 'flex', flexDirection: "column"  , alignItems: "center" , justifyContent: "center" }}>
        <Box className="avatarWrapper">
        <div class="avatarContent">
          <Avatar alt="images" src="" />
          </div>
        </Box>
        <span>person info</span>
        </Box>
       
        <Box sx={{ display : 'flex', flexDirection: "column"  , alignItems: "center" , justifyContent: "center" }}>
        <Box className="avatarWrapper">
        <div class="avatarContent">
          <Avatar alt="images" src="" />
          </div>
        </Box>
        <span>person info</span>
        </Box>
       
        <Box sx={{ display : 'flex', flexDirection: "column"  , alignItems: "center" , justifyContent: "center" }}>
        <Box className="avatarWrapper">
        <div class="avatarContent">
          <Avatar alt="images" src="" />
          </div>
        </Box>
        <span>person info</span>
        </Box>
       
        <Box sx={{ display : 'flex', flexDirection: "column"  , alignItems: "center" , justifyContent: "center" }}>
        <Box className="avatarWrapper">
        <div class="avatarContent">
          <Avatar alt="images" src="" />
          </div>
        </Box>
        <span>person info</span>
        </Box>
      </Stack>
    </div>
  );
}
