import React, {useEffect,useState} from "react";
import "./SideBar.css";
import Card from "../ui/card/Card";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const posts = blogPost.data;
      setPosts(posts);
    }, [posts]);

  
  return (
    <div className="sidebarContainer">
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="sidebarheader">
          <span>About Us</span>
        </div>
        <div className="profileImg">
          <img src={require("../../blogPostImages/edit.jpg")} alt="propic" />
        </div>
        <div className="cardBody">
          <p className="personalbio">
            My name is Md Hafijul Islam, I am web developer specialization in
            front end development.....:)
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="sidebarheader">
          <span>Social Icon</span>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="sidebarheader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">

          {
            posts.map(post => {
              return (
                <NavLink key={post.id} to={`/post/${post.id}`}>
                  <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>
              );
            })
          }
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
