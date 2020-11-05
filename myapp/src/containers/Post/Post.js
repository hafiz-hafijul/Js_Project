import React from "react";
import "./Post.css";
import Postblog from "../../component1/postblog/Postblog";
import SideBar from "../../component1/sidebar/SideBar";

const Post = (props) => {
  return (
    <div>
      <section className="container">
        <Postblog {...props} />
        <SideBar {...props} />
      </section>
    </div>
  );
};

export default Post;
