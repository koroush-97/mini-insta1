import React from "react";
import "./ProfileMain.css";
import { Box } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import img from "../../helpers/photos/Screenshot_28-10-2024_185137_.jpeg";
import Divider from "@mui/material/Divider";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import Typography from '@mui/material/Typography';


export default function ProfileMain() {
  return (
    <div className="ProfileMain">
      <Box className="person-personality">
        <Box
          sx={{
            display: "flex",
            width: "170px",
            alignItems: "center",
            height: "30px",
            justifyContent: "space-between",
            marginLeft: "70px",
          }}
        >
          <h3>acount-name</h3>
          <SettingsOutlinedIcon sx={{ marginRight: "20px" }} />
        </Box>

        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              width: "200px",
              justifyContent: "space-around",
              marginLeft: "100px",
              marginTop: "15px",
            }}
          >
            <Box
              sx={{
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20px",
                backgroundColor: "lightgray",
                borderRadius: "12px",
              }}
            >
              {" "}
              Edite Profile{" "}
            </Box>
            <Box
              sx={{
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20px",
                backgroundColor: "lightgray",
                borderRadius: "12px",
              }}
            >
              {" "}
              view Archive{" "}
            </Box>
          </Box>

          <Box
            component="img"
            src={img}
            sx={{
              padding: "10px",
              backgroundColor: "#fff",
              position: "absolute",
              border: "2px solid gray",
              top: "50px",
              left: "0",
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <Box sx={{ marginTop: "100px", marginLeft: "70px" }}>
            {" "}
            <h4>person name</h4>{" "}
            <h6 style={{ marginTop: "-10px", textWrap: "wrap" }}>
              person info : , adipisicing elit..
            </h6>
          </Box>

          <Box
            sx={{
              width: "70px",
              height: "70px",
              border: "2px solid gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              fontSize: "30px",
              color: "gray",
              marginLeft: "10px",
            }}
          >
            {" "}
            +{" "}
          </Box>
          <h6 style={{ marginLeft: "33px", marginTop: "5px" }}>NEW</h6>
        </Box>
        <Divider sx={{ borderWidth: "2px", width: "100%" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "70px",
          }}
        >
          <Box
            sx={{
              width: "70px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {" "}
            <BackupTableIcon fontSize="large" sx={{ cursor: "pointer" }} />{" "}
          </Box>
          <Box
            sx={{
              width: "70px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {" "}
            <BookmarkBorderIcon
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />{" "}
          </Box>
          <Box
            sx={{
              width: "70px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {" "}
            <RecentActorsIcon
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />{" "}
          </Box>
        </Box>
        <Divider sx={{ borderWidth: "2px", width: "100%" }} />

        <Box className="share-posts">
          <Box sx={{ border: "5px solid grey" , borderRadius: "50%" , fontSize: "70px", width:"100px" , height:"100px" , display:"flex" , justifyContent:"center" , alignItems:"center" , marginTop: "-150px" }} >
            <CameraAltTwoToneIcon  sx={{ fontSize:"70px" }} />
          </Box>
                <Typography variant="h5" >share your posts</Typography>
                <Typography variant="h7"> when you share your posts <br /> they will appire  on your profile </Typography>


        </Box>
      </Box>
    </div>
  );
}
