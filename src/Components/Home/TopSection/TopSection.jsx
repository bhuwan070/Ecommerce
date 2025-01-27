import React from 'react'
import Rating from "../PopularProduct/Rating"
import img1 from "../../../assets/thumbnail/thumbnail-1.jpg"
import img2 from "../../../assets/thumbnail/thumbnail-2.jpg"
import img3 from "../../../assets/thumbnail/thumbnail-3.jpg"
import img4 from "../../../assets/thumbnail/thumbnail-4.jpg"
import img5 from "../../../assets/thumbnail/thumbnail-5.jpg"
import img6 from "../../../assets/thumbnail/thumbnail-6.jpg"
import img7 from "../../../assets/thumbnail/thumbnail-7.jpg"
import img8 from "../../../assets/thumbnail/thumbnail-8.jpg"
import img9 from "../../../assets/thumbnail/thumbnail-9.jpg"
import img10 from "../../../assets/thumbnail/thumbnail-10.jpg"
import img11 from "../../../assets/thumbnail/thumbnail-11.jpg"
import img12 from "../../../assets/thumbnail/thumbnail-12.jpg"

const Cards = [
  {
    img: img1,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
  {
    img: img2,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
  {
    img: img3,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
  {
    img: img4,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
  {
    img: img5,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
  {
    img: img6,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
  {
    img: img7,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
  {
    img: img8,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
  {
    img: img9,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
  {
    img: img10,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
  {
    img: img11,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
  {
    img: img12,
    title: "Nestle Original Coffee-Mate Coffee Creamer",
    rating: "4.5",
    disPrice: "32.85",
    fullPrice: "$33.86",
  },
];

const headings = [
  {
    heading: "Top Selling",
  },
  {
    heading: "Trending Products",
  },
  {
    heading: "Recently Added",
  },
  {
    heading: "Top Rated",
  },
];

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const TopSection = () => {
  // Split the Cards array into groups of 3
  const groups = chunkArray(Cards, 3).map((group, index) => ({
    heading: headings[index]?.heading,
    items: group,
  }));

  return (
    <section className="px-3 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 hx:grid-cols-4 gap-8 hx:gap-4 px-1">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className='w-[80%] hx:w-full'>
            {/* Render the heading for each group */}
            <h1 className="text-2xl text-gray-700 font-bold mb-8 pb-4 border-b-2 relative">{group.heading} <span className='absolute w-[23%] h-[3px] bg-primary bottom-[-1px] left-0 bg-opacity-70'></span></h1>
            {group.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center gap-4 mb-6 hover:shadow-sm hover:-translate-y-1 ease duration-300">
                <div className='min-w-[93px] h-[93px]'>
                  <img src={item.img} alt={item.title} className=" w-full h-full rounded-[10px]" />
                </div>
                <div className="">
                  <h1 className="text-base text-gray-700 font-bold hover:text-primary cursor-pointer ease duration-300">
                    {item.title}
                  </h1>
                  <Rating rating={item.rating} />
                  <h1 className="text-primary text-lg font-bold mt-2 truncate">
                    {item.disPrice}{" "}
                    <span className="text-gray-400 text-sm line-through font-semibold mx-4">
                      {item.fullPrice}
                    </span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSection;
