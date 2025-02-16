import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { Link } from "react-router-dom"; 

const FooterLink = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

export const Footer = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white">
      <div className="grid md:grid-cols-3 pb-20 pt-5">
        {/* company detail  */}
        <div className="py-8 px-4 mx-4">
          <a
            href="#"
            className="text-2xl font-semibold tracking-widest
               uppercase text-primary sm:text-3xl"
          >
            Eshop
          </a>
          <p className="text-gray-600 lg:pr-22 pt-3 dark:text-white/70">
            🎧 The best electronics store - unmatched quality! 🎶
            <br />
            Enjoy the best deals on wireless and wired headphones 🎁
            <br />
            💥 Exclusive offers and discounts up to 50%! 💥
            <br />
            📦 Fast shipping | 🛡️ Quality assurance | 💳 Safe checkout
          </p>
        </div>
        {/* Footer Links  */}
        <div
          className="col-span-2 grid grid-cols-2 sm:grid-cols-3 
                md:pl-10 mx-4"
        >
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold sm:text-left mb-3">
              Important Links
            </h1>
            <ul className="space-y-3">
              {FooterLink.map((data, index) => (
                <li key={index}>
                  <Link
                    to={data.link} 
                    className="text-gray-600 dark:text-gray-400
                     hover:text-black hover:dark:text-white duration-300"
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Quick Links */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
            <ul className="space-y-3">
              {FooterLink.map((data, index) => (
                <li key={index}>
                  <Link
                    to={data.link}
                    className="text-gray-600 dark:text-gray-400
                     hover:text-black hover:dark:text-white duration-300"
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* company Address  */}
          <div className="py-8 px-4 col-span-2 sm:col-auto ">
            <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
            <div>
              <div className="flex items-center">
                <FaLocationArrow />
                <p className="ml-3">Syria , Damscuse</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt />
                <p>+963 959837527</p>
              </div>
            </div>
            {/* Social Media  */}
            <div className="flex items-center gap-3 mt-6 ">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-200" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-200" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
