import React from "react";
import Heading from "../Shared/Heading";
import img1 from "../../assets/blogs/blog-1.jpg";
import img2 from "../../assets/blogs/blog-2.jpg";
import img3 from "../../assets/blogs/blog-3.jpg";

const Blogs = () => {
  const BlogData = [
    {
      id: 1,
      data: "Jan 20, 2024 by Dilshad",
      title: "How to choose perfect smartwatch",
      description:
        "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
      image: img1,
      aosDelay: "0",
    },
    {
      id: 2,
      data: "Jan 20, 2024 by Satya",
      title: "How to choose perfect gadget",
      description:
        "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
      image: img2,
      aosDelay: "200",
    },
    {
      id: 3,
      data: "Jan 20, 2024 by Sabir",
      title: "How to choose perfect VR headset",
      description:
        "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
      image: img3,
      aosDelay: "400",
    },
  ];

  return (
    <div className="my-12">
      <div>
        {/* Header Section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
        {/* Blogs Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay} 
              data-aos-duration="800"
              className="bg-white dark:bg-gray-900"
              key={data.id}
            >
              {/* img section */}
              <div
                className="overflow-hidden rounded-2xl mb-2"
                data-aos="zoom-in" 
                data-aos-duration="1000" 
              >
                <img
                  src={data.image}
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                  alt=""
                />
              </div>
              {/* content section */}
              <div
                className="space-y-2"
                data-aos="fade-up" 
                data-aos-duration="1000" 
              >
                <span className="text-xs text-gray-500">{data.data}</span>
                <h1 className="font-bold line-clamp-1">{data.title}</h1>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
