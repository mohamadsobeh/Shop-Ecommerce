import React, { useState } from "react";
import Img1 from "../assets/product/p-1.jpg";
import Img2 from "../assets/product/p-2.jpg";
import Img3 from "../assets/product/p-3.jpg";
import Img4 from "../assets/product/p-5.jpg";
import Img5 from "../assets/product/p-9.jpg";
import Img6 from "../assets/product/p-7.jpg";

const products = [
  {
    id: 1,
    name: "Boat Headphone",
    description:
      "Immersive sound, comfortable design, and versatile connectivity for music, movies, and gaming.",
    price: "$40",
    image: Img1,
    aosDelay: "0",
  },
  {
    id: 2,
    name: "SmartX Pro Watch",
    description:
      "Stylish smartwatch with Amoled display, health tracking, water resistance, and long battery life",
    price: "$100",
    image: Img2,
    aosDelay: "200",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    description:
      "Experience rich audio, a cozy fit, and seamless compatibility for all your entertainment needs.",
    price: "$60",
    image: Img3,
    aosDelay: "400",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    description:
      "Experience rich audio, a cozy fit, and seamless compatibility for all your entertainment needs.",
    price: "$50",
    image: Img4,
    aosDelay: "600",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    description:
      "Immersive sound, comfortable design, and versatile connectivity for music, movies, and gaming.",
    price: "$25",
    image: Img5,
    aosDelay: "800",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    description:
      "Experience rich audio, a cozy fit, and seamless compatibility for all your entertainment needs.",
    price: "$80",
    image: Img6,
    aosDelay: "1000",
  },
];

const Shop = ({ addToCart }) => {
  const [popupMessage, setPopupMessage] = useState("");

  const handleAddToCart = (product) => {
    const price = parseFloat(product.price.replace("$", ""));
    addToCart({ ...product, price });
    setPopupMessage(`${product.name} تم إضافته إلى السلة!`);
  };

  return (
    <div className="lg:px-16 sm:px-12 px-6 bg-gray-100
     dark:bg-gray-900 dark:text-gray-200 duration-200 overflow-hidden">
      <div className="min-h-screen p-6">
        <div className="flex justify-center items-center mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-white dark:bg-gray-800 
                shadow-md rounded-2xl hover:shadow-xl
                 transition-transform transform hover:-translate-y-2"
                data-aos="fade-up" 
                data-aos-delay={product.aosDelay} 
                data-aos-duration="800" 
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[220px] object-cover rounded-2xl"
                  data-aos="zoom-in" 
                  data-aos-duration="1000" 
                />
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-bold text-gray-900
                   dark:text-gray-100">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600
                   dark:text-gray-400 mt-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-gray-500 mt-4">
                    {product.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 px-4 py-2 bg-blue-600
                     text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* popup window */}
      {popupMessage && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
