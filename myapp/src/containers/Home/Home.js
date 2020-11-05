import Card from "../../component1/ui/card/Card";
import React from "react";
import "./Style.css";
import RecentPosts from "./RecentPosts/posts";
import SideBar from "../../component1/sidebar/SideBar";
import blogData from "../../data/blog.json";



  const gallaryHeight = 450;
  const sideImageheight = gallaryHeight / 3;


const SideImage = (props) => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="Post1" />
    </div>
  );
};

const ImageGallary = (props) => (
  <div className="gallaryPost" style={props.gallaryStyle}>
    <section style={{ width: "70%" }}>
      <div className="mainImageWrapper">
        <img
          src={require("../../blogPostImages/" + props.imageArry[0])}
          alt="Post"
        />
      </div>
    </section>

    <section className="sideImageWrapper" style={{ width: "30%" }}>
      <SideImage
        height={sideImageheight}
        src={require("../../blogPostImages/" + props.imageArry[1])}
      />

      <SideImage
        height={sideImageheight}
        src={require("../../blogPostImages/" + props.imageArry[2])}
      />

      <SideImage
        height={sideImageheight}
        src={require("../../blogPostImages/" + props.imageArry[3])}
      />

    </section>
  </div>
);

const Home = (props) => {


  const gallaryStyle = {
    height: gallaryHeight + "px",
    overflow: "hidden",
  };

  const imgArr = blogData.data.map((post) => post.blogImage);

  return (
    <div>
      <Card>
        <ImageGallary
          largeWidth="70%"
          smallWidth="30%"
          images={[]}
          imageArry={imgArr}
        />
      </Card>

      <section className="homeContainer">
        <RecentPosts />
        <SideBar />
      </section>
    </div>
  );
};

export default Home;
