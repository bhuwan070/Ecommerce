import React from "react";
import PageContainer from "../Components/PageContainer";
import SearchNav from "../Components/Home/Header/SearchNav"
import Navbar from "../Components/Home/Header/Navbar"
import MainBlog from "../Components/Blog/MainBlog";

 
const Blog = () => {
  return (
    <>
      <SearchNav />
      <Navbar />
      <PageContainer HeadingText="Blog & News"/>
      <MainBlog />
    </>
  );
};

export default Blog;
