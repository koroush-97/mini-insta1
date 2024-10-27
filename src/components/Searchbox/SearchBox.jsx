import React from "react";
import "./SearchBox.css";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function SearchBox() {
  return (
    <div className="SearchBox">
      <Box sx={{ flex: "12",  padding: "7px" , height: "40px" }}>
        <TextField
        variant="outlined"
        placeholder="Search..."
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
      <Box sx={{  padding: "7px", marginLeft: "10px" , position: "relative" }}>
        <span style={{ width: "10px" , height: "10px" , backgroundColor: "red" , borderRadius: "50%" , position: "absolute" , right: '5px' , top: '5px' }}></span>
        {" "}
        <FavoriteBorder sx={{ cursor: "pointer" }} />{" "}
      </Box>
    </div>
  );
}
