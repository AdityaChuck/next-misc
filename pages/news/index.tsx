import { GetStaticProps } from "next";
import React from "react";

const NewsArticles = ({ news }) => {
  return (
    <div className="content">
      <h1>{news}</h1>
    </div>
  );
};

export default NewsArticles;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("In dev will work?");
  console.log("Who is user -> ", context.previewData);

  return {
    props: {
      news: context.preview ? "List of draft articles" : "List of articles",
    },
  };
};
