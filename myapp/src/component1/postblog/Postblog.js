import Card from "../ui/card/Card";
import React, { useEffect, useState } from "react";
import "./Postblog.css";
import blogPost from "../../data/blog.json";

const Postblog = (props) => {
  const [post, setPost] = useState({
    id: 1,
    blogCategory: "",
    blogTitle : "",
    slug: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText:''
  });
  const [postId, setPostId] = useState("");

  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find((post) => post.id == postId);
    setPost(post);
  }, [post, props.match.params.postId]);

  if (post.blogImage == '') return null;

  return (
    <div className="blogPostContainer">
      <Card>
        <div className="bloghead">
          <span className="blogCatagory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postby">
            Post on {post.postedOn} by {post.author}
          </span>
        </div>

        <div className="blogImgContainer">
          <img
            src={require(`../../blogPostImages/${post.blogImage}`)}
            alt="img1"
          />
        </div>

        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
};

export default Postblog;
