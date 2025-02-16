import React from "react";
import Blogs from "../components/Blogs/Blogs";

const BlogsPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 dark:text-gray-200 min-h-screen">
      <div className="container mx-auto py-16 px-6 lg:px-16">
        {/* Blogs Section */}
        <div
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Blogs />
        </div>

        {/* Load More Button */}
        <div
          className="mt-12 text-center"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Load More Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
