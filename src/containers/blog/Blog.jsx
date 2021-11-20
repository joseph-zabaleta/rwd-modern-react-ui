import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="Ground breaking GPT-3 Technology breakthrough."
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="Come explore why GPT-3 and AI are the future."
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="The problems that GPT-3 are facing and how they plan to overcome the hurdles"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="Future stakeholders are pleased with Q1 Reports of GPT-3 companies World Wide"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
