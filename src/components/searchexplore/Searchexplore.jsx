import React from 'react'
import './Searchexplore.css'  
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';


export default function Searchexplore() {
  return (
    <div className="SearchBox">
    <Box sx={{ flex: "12",  padding: "7px" , height: "40px" }}>
      <TextField
      variant="outlined"
      placeholder="explore..."
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
       }}

      sx={{
        height: '100%', // ارتفاع TextField به اندازه والد
        '& .MuiOutlinedInput-root': {
          height: '100%', // ارتفاع قسمت داخلی
          backgroundColor : "lightgray"
        },
      }}
      />
    </Box>
   
  </div>
  )
}
