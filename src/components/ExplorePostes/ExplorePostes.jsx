import React, { useEffect, useState, useRef, useCallback } from "react";
import "./ExpolorePostes.css";
import { Box } from "@mui/material";

export default function ExplorePostes() {

  const [gifs, setGifs] = useState([]);
  const [page, setPage] = useState(1);   
 
  const observer = useRef();

  const gifsFetch = async () => {
    try {
      const res = await fetch(`https://randomuser.me/api/?results=10&page=${page}`); 
      const result = await res.json();
      setGifs(prevGifs => [...prevGifs, ...result.results]);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    gifsFetch();
  }, [page]); //  

  const lastGifElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1); // 
        }
      });
      if (node) observer.current.observe(node);
    },
    []
  );

  return (
    <>
      {gifs.length ? (
        gifs.map((gif, index) => {
          if (gifs.length === index + 1) {
            return (
              <Box ref={lastGifElementRef} key={index} className="gridPostes">
                {gif.picture ? (
                  <img
                    style={{
                      cursor: "pointer",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                    src={gif.picture.large}
                    alt="post"
                  />
                ) : (
                  "در حال بارگذاری..."
                )}
              </Box>
            );
          } else {
            return (
              <Box key={index} className="gridPostes">
                {gif.picture ? (
                  <img
                    style={{
                      cursor: "pointer",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                    src={gif.picture.large}
                    alt="post"
                  />
                ) : (
                  "در حال بارگذاری..."
                )}
              </Box>
            );
          }
        })
      ) : (
        <p>پست‌ها در حال بارگذاری است...</p>
      )}
    </>
  );
}
