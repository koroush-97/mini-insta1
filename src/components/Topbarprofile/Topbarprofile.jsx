import React from 'react'
import './Topbarprofile.css'
import { Box } from '@mui/material'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Divider from '@mui/material/Divider';


export default function Topbarprofile() {
  return (
    <>
    <div className='Topbarprofile'>
        <Box sx={{ padding: "18px" }} >
          <SettingsOutlinedIcon sx={{ cursor: "pointer" }} />
        </Box>
        <Box sx={{ padding: "10px" , display: "flex"}} >
          <Box className="account-name" ><p>account name</p></Box>
          <Box className="iconeKeybord" > <KeyboardArrowDownOutlinedIcon/> </Box>
        </Box>
        <Box sx={{ padding: "18px" , display: "flex" , justifyContent: "end"}} >
          <AlternateEmailIcon sx={{ cursor: "pointer" }}/>
        </Box>
        
    </div>
    <Divider sx={{ borderWidth: "2px" }}/>
    </>
  )
}
