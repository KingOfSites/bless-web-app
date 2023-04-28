import React from "react";
import Navbar from "../../components/Navbar";
import Post from "../../components/Post";
import NavbarDireita from "../../components/NavbarDireita";

function Feed() {
  return (
    <div>
      <Navbar />
      <Post />
      <NavbarDireita />
    </div>
  );
}

export default Feed;
