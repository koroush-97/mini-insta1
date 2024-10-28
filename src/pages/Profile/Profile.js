import React from 'react'
import './Profile.css'
import { Box } from '@mui/material'
import Topbarprofile from '../../components/Topbarprofile/Topbarprofile'
import ProfileMain from '../../components/profileMain/ProfileMain'


export default function Profile() {
  return (
    <div className='Profile-container'>
      <Box className="profile-container-page">
        <Topbarprofile />
        <ProfileMain />
      </Box>
    </div>
  )
}
