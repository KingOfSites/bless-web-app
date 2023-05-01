import React from "react";
import Navbar from "../../components/Navbar";
import Post from "../../components/Post";
import NavbarDireita from "../../components/NavbarDireita";

function Feed() {
  return (
    <div>
      <NavbarDireita />
      <Post />
      <Navbar />
    </div>
  );
}

export default Feed;
