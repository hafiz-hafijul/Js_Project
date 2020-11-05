import React from "react";
import "./style.css";
import Card from "../../../component1/ui/card/Card";
import blogData from '../../../data/blog.json'

const posts = (props) => {
  return (
    <div style={{ width: "70%" }}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img src={require("../../../blogPostImages/memories-from.jpg")} />
        </div>
        <div style={{ textAlign: "center" }}>
          <span>Featured</span>
          <h2>Fitness Mantra To Life Fit Live</h2>
          <span>July 21, 2020</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button>Read More</button>
        </div>
      </Card>
    </div>
  );
};

export default posts;
