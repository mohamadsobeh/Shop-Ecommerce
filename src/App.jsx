import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import smartWatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import { Partners } from "./components/Partners/Partners";
import { Footer } from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Shop from "./Pages/Shop";
import About from "./pages/About";
import BlogsPage from "./pages/Blogs";
import LoginPage from "./components/LogIn/LoginPage";
import RegisterPage from "./components/LogIn/RegisterPage";
import Logout from "./components/LogIn/Logout";
import CartModal from "./components/CartModal/CartModal";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "50% OFF",
  title: "Fine Smile",
  data: "10 jan to 28 jan",
  image: headphone,
  title2: "Air Solo Base",
  title3: "Winter Sale",
  title4: "Enjoy unbeatable discounts on top-quality products this season!",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  data: "14 jan to 28 jan",
  image: smartWatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Enjoy unbeatable discounts on top-quality products this season!",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null); 

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setPopupMessage(`${product.name} تم إضافته إلى السلة!`);
  };

  const clearCart = () => {
    setCartItems([]); 
  };

  const closePopup = () => {
    setPopupMessage("");
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Navbar
        cartItems={cartItems}
        clearCart={clearCart}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />
      </Routes>
      {popupMessage && <Popup message={popupMessage} onClose={closePopup} />}
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          total={cartItems
            .reduce((acc, item) => acc + item.price, 0)
            .toFixed(2)}
          clearCart={clearCart} 
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <div className="lg:px-20 sm:px-12 px-6 bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Hero />
        <Category />
        <Services />
        <Banner data={BannerData} />
        <Products />
        <Banner data={BannerData2} />
        <Blogs />
      </div>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Partners />
        <Footer />
      </div>
    </>
  );
};
export default App;
