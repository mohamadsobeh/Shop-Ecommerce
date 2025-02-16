import React from "react";
import AboutImage from "../assets/hero/headphone.png";

const About = () => {
  return (
    <div className="lg:px-16 sm:px-12 px-6 bg-gradient-to-b
     from-gray-100 to-gray-300 dark:from-gray-800
      dark:to-gray-900 dark:text-gray-200 duration-200 overflow-hidden">
      <div className="min-h-screen p-10 flex flex-col items-center">
        {/* About Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl
           font-bold text-gray-900 dark:text-gray-100
            transition-all duration-300 transform hover:scale-105">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-800
           dark:text-gray-400 mt-4 max-w-3xl mx-auto tracking-wide">
            Discover the perfect blend of quality and innovation with our
            premium audio products. From casual listeners to audiophiles, we
            have something for everyone.
          </p>
        </div>

        {/* Hero Image and Story */}
        <div
          className="w-full max-w-3xl bg-white
           dark:bg-gray-800 rounded-xl shadow-2xl mx-auto p-8 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="flex flex-col md:flex-row 
          items-center justify-between space-x-8">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src={AboutImage}
                alt="About Us"
                className="w-full max-w-md rounded-xl 
                shadow-lg transform transition duration-300 hover:scale-105"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-semibold
               text-gray-900 dark:text-gray-100 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                From the first idea to the final product, our story is built on
                a passion for exceptional sound. We create products that help
                you experience music like never before.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div
          className="w-full max-w-3xl bg-white
           dark:bg-gray-800 rounded-xl shadow-2xl mx-auto p-8 mb-16"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl font-semibold
           text-gray-900 dark:text-gray-100 mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 
          sm:grid-cols-2 md:grid-cols-2 gap-8">
            <div
              className="flex items-center space-x-4"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <div className="text-4xl text-blue-600">🎧</div>
              <div className="text-lg text-gray-600 dark:text-gray-300">
                High-fidelity sound that immerses you in every note and beat.
              </div>
            </div>
            <div
              className="flex items-center space-x-4"
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              <div className="text-4xl text-yellow-500">✨</div>
              <div className="text-lg text-gray-600 dark:text-gray-300">
                Ergonomic design providing maximum comfort for long listening
                sessions.
              </div>
            </div>
            <div
              className="flex items-center space-x-4"
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              <div className="text-4xl text-green-500">🔋</div>
              <div className="text-lg text-gray-600 dark:text-gray-300">
                Extended battery life with fast charging to keep you going.
              </div>
            </div>
            <div
              className="flex items-center space-x-4"
              data-aos="fade-left"
              data-aos-delay="1200"
              data-aos-duration="1000"
            >
              <div className="text-4xl text-red-500">🏆</div>
              <div className="text-lg text-gray-600 dark:text-gray-300">
                Premium quality at a price that offers exceptional value.
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="1400"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl font-semibold
           text-gray-900 dark:text-gray-100">
            Get in Touch
          </h2>
          <p className="mt-3 text-lg text-gray-700
           dark:text-gray-400 max-w-lg mx-auto">
            Have questions? Our customer support team is here to assist you. Get
            in touch for any inquiries.
          </p>
          <button className="mt-6 px-8 py-3
           bg-gradient-to-r from-blue-500 to-indigo-600
            text-white font-medium rounded-lg
             hover:opacity-90 transition transform hover:scale-105 shadow-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
