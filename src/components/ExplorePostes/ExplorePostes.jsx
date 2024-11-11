
import React, { useEffect, useState } from "react";
import "./ExpolorePostes.css";
import { Box } from "@mui/material";

export default function ExplorePostes() {
  const gifsFeatch = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=30");
      const result = await res.json();
      console.log(result.results); 
      setGifs(result.results ); 
    } catch (error) {
      console.log("Thats an error for movies", error);
    }
  };

  const [gifs, setGifs] = useState([]); 
  useEffect(() => {
    gifsFeatch();
  }, []);

  return (
    <>
      {gifs.length ? (
        gifs.map((gif, index) => (
          <Box key={index} className="gridPostes">
          
            {gif.picture ? (
              <img style={{ cursor: "pointer" , width: "100%" , height: "100%" , objectFit: "cover" }} src={gif.picture.large} alt="posts" />
            ) : (
              'تصویر در حال بارگذاری است ...'
            )}
          </Box>
        ))
      ) : (
        <p>فیلم‌ها در حال بارگذاری است...</p>
      )}
    </>
  );
}
