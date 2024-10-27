import React from 'react'
import { Box } from '@mui/material'
import './Bottombar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';




export default function Botombar() {
  return (
    <Box className="bottomcontainer">
     
        <Link to="/profile" >
        <AccountCircleOutlinedIcon className='itembottomnav'  sx={{ cursor: 'pointer' , fontSize: "35px" }} />
        </Link>

        <Link to="/explore" >
        <ExploreOutlinedIcon className='itembottomnav'  sx={{ cursor: 'pointer' , fontSize: "35px" }} />
        </Link>


        <Link to="/" >
        <HomeOutlinedIcon className='itembottomnav' sx={{ cursor: 'pointer' , fontSize: "35px" }} />
        </Link>
    </Box>
  )
}
