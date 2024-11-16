import React, { useState, useEffect, useRef } from "react";
import { Box, Avatar } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

export default function MainPosts() {
  const [users, setUsers] = useState([]);
  const [pics, setPics] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);
  const containerRef = useRef(null);

  const fetchData = async (pageNumber) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/users?limit=10&skip=${(pageNumber - 1) * 10}`
      );
      const result = await res.json();
      setUsers((prevUsers) => [...prevUsers, ...result.users]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchPics = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=10");
      const result = await res.json();
      setPics((prevPics) => [...prevPics, ...result.results]);
    } catch (error) {
      console.log("Error fetching pictures:", error);
    }
  };

  const getPics = (index) => {
    if (pics.length === 0) return "تصاویر در حال بارگذاری هستند ...";
    return pics[index]?.picture?.large;
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      if (entries[0].isIntersecting && !loading) {
        setLoading(true);
        setPage((prevPage) => prevPage + 1);
      }
    };

    const observerOptions = {
      root: containerRef.current,
      rootMargin: "0px",
      threshold: 0.1, //
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loading]); //

  useEffect(() => {
    if (page > 1) {
      fetchData(page);
      fetchPics();
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchData(1);
    fetchPics();
  }, []);

  return (
    <Box
      className="posts_container"
      sx={{
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "381px",
        overflowY: "scroll",
        maxHeight: "600px",
      }}
      ref={containerRef} //
    >
      <Box className="box-final-height">
        {users.length ? (
          users.map((user, index) => (
            <Box className="post" key={`${user.id}-${index}`}>
              <Box className="avatar-info-spred-box">
                <Box className="avatar-info">
                  <Avatar
                    className="avatarinfo-avatar"
                    alt="User Avatar"
                    src={user.image}
                  />
                  <p className="avatar-info-p"> {user.firstName} </p>
                </Box>
                <Box className="spred">
                  <span className="spred-span">...</span>
                </Box>
              </Box>

              <Box className="posts-media">
                <img
                  src={getPics(index)}
                  alt="pic-posts"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Box className="main-posts-descriptions">
                <Box className="main-post-icones">
                  <FavoriteBorderOutlinedIcon className="main-post-icones-components" />
                  <ChatBubbleOutlineOutlinedIcon className="main-post-icones-components" />
                  <ShareOutlinedIcon className="main-post-icones-components" />
                </Box>
                <Box className="main-post-save">
                  <BookmarkBorderOutlinedIcon className="main-post-icones-components" />
                </Box>
              </Box>

              <Box className="main-post-transitions">
                <Box className="main-post-transitions-Items">
                  <h4>
                    <span>{user.age}</span> Likes
                  </h4>
                </Box>
                <Box className="main-post-transitions-Items nagetiveMargin">
                  <h6> captions : {user.university} </h6>
                </Box>
                <Box className="main-post-transitions-Items nagetiveMargin">
                  <h5 style={{ color: "gray" }}>
                    view all {user.age} comments
                  </h5>
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <p>در حال بارگذاری...</p>
        )}
      </Box>

      <div
        ref={loadMoreRef}
        style={{
          height: "50px",
          backgroundColor: "transparent",
          textAlign: "center",
        }}
      >
        {loading && <p>در حال بارگذاری...</p>}
      </div>
    </Box>
  );
}
