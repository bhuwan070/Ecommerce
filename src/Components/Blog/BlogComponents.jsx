import React from "react";
import image1 from "../../assets/Blog/blog-1.png";
import image2 from "../../assets/Blog/blog-2.png";
import image3 from "../../assets/Blog/blog-3.png";
import image4 from "../../assets/Blog/blog-4.png";
import image5 from "../../assets/Blog/blog-5.png";
import image6 from "../../assets/Blog/blog-6.png";
import image7 from "../../assets/Blog/blog-7.png";
import image8 from "../../assets/Blog/blog-8.png";
import image9 from "../../assets/Blog/blog-9.png";
import image10 from "../../assets/Blog/blog-10.png";
import image11 from "../../assets/Blog/blog-1.png";
import image12 from "../../assets/Blog/blog-12.png";
import image13 from "../../assets/Blog/blog-13.png";
import image14 from "../../assets/Blog/blog-14.png";
import image15 from "../../assets/Blog/blog-15.png";

const blogs = [
  {
    img: image1,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image2,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image3,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image4,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image5,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image6,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image7,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image8,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image9,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image10,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image11,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image12,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image13,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image14,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
  {
    img: image15,
    cat: "Side Dish",
    title: "The Intermediate Guide to Healthy Food",
    date: "25 April 2024",
    views: "126k views",
    readStats: "4 mins read",
  },
];

const BlogComponents = () => {
  return (
    <section className="my-12 grid grid-cols-3 gap-6">
      {blogs.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-center hover:-translate-y-2 ease duration-300">
          <img src={item.img} className="rounded-2xl" alt="" />
          <div className="flex flex-col justify-center items-center w-[90%] my-6 gap-3">
            <p className="text-gray-400 tracking-wide font-bold text-sm">
              {item.cat}
            </p>
            <h1 className="text-gray-700 text-2xl text-center font-bold">
              {item.title}
            </h1>
            <div className="flex justify-center gap-2 items-center text-[13px] text-gray-500 font-semibold">
              <p>{item.date}</p>
              <p className="text-lg font-bold">•</p>
              <p>{item.views}</p>
              <p className="text-lg font-bold">•</p>
              <p>{item.readStats}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogComponents;
