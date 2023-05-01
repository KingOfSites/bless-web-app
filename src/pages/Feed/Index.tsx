import React from "react";
import Navbar from "../../components/Navbar";
import Post from "../../components/Post";
import NavbarDireita from "../../components/NavbarDireita";

function Feed() {
  return (
    <div>
      <Navbar />
      <NavbarDireita />
      <Post />
    </div>
  );
}

export default Feed;
