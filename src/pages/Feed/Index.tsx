import React from "react";
import Navbar from "../../components/NavBarFeed/Index";
import Post from "../../components/PostFeed/Index";
import SideBar from "../../components/SidebarFeed/Index";

function Feed() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Post />
    </div>
  );
}

export default Feed;
