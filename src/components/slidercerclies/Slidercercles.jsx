
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "./slidercercles.css";

export default function Slidercercles() {
  const persionInfoPics = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=30");
      const result = await res.json();
      setSliderspics(result.results); 
    } catch (error) {
      console.log("thats an error for sliderscyrcles", error);
    }
  };

  useEffect(() => {
    persionInfoPics(); 
  }, []);

  const [sliderspics, setSliderspics] = useState([]);

  return (
    <div className="containerSlidercercles">
      <Stack direction="row" spacing={3} className="stack">
        {sliderspics.length ? (
          sliderspics.map((pic, index) => (
            <Box
              key={index} 
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box className="avatarWrapper">
                <div className="avatarContent">
                  <Avatar alt="images" src={pic.picture.large} />
                </div>
              </Box>
              <span>{pic.name.first}</span>

            </Box>
          ))
        ) : (
          "profile ها در حال بارگیری هستند ..."
        )}
      </Stack>
    </div>
  );
}
