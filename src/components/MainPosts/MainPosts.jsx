
import React, { useEffect, useState } from "react";
import "./MainPosts.css";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

export default function MainPosts() {
  const [users, setUsers] = useState([]);
  const [pics, setPics] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const result = await res.json();
      setUsers(result.users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchpics = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=30");
      const result = await res.json();
      setPics(result.results); 
    } catch (error) {
      console.log("Error fetching pictures:", error);
    }
  };

  const getpics = (index) => {
    if (pics.length === 0) return "تصاویر در حال بارگذاری هستند ..."; 
    return pics[index].picture.large; 
  };

  useEffect(() => {
    fetchData();
    fetchpics();
  }, []);

  return (
    <Box className="posts_container">
      <Box className="box-final-height">
        {users.length ? (
          users.map((user, index) => (
            <Box className="post" key={user.id}>
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
                  src={getpics(index)}       
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
                  <h5 style={{ color: "gray" }}>view all {user.age} comments</h5>
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <p>در حال بارگذاری...</p>
        )}
      </Box>
    </Box>
  );
}
