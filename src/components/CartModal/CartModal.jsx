import React from "react";
import { db } from "../LogIn/Firebasee";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const CartModal = ({ cartItems, onClose, clearCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const formattedTotal = total.toFixed(2);

  const auth = getAuth();
  const user = auth.currentUser;

  const handleConfirmPurchase = async () => {
    if (!user) {
      alert("يجب عليك تسجيل الدخول أولاً.");
      window.location.href = "/register";
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "orders"), {
        items: cartItems,
        total: formattedTotal,
        timestamp: new Date(),
        user: {
          id: user.uid,
          name: user.displayName || "Guest",
          email: user.email || "N/A",
        },
      });

      console.log("Order confirmed with ID: ", docRef.id);
      alert("تم الإرسال بنجاح!");

      clearCart();
      onClose();
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("حدث خطأ أثناء إضافة الطلب.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black 
    bg-opacity-50 flex justify-center items-center p-4">
      <div
        className="bg-white dark:bg-gray-800
         rounded-2xl w-full max-w-lg p-6 shadow-xl
          transition-all transform scale-100"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h2
          className="text-3xl font-bold
           text-gray-900 dark:text-white text-center mb-5"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="flex flex-col justify-center items-center text-center">
            <p
              className="text-gray-500 dark:text-gray-300 text-xl mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              Your cart is empty.
            </p>
            <button
              onClick={onClose}
              className="bg-gray-600 text-white py-2 px-5 rounded-lg hover:bg-gray-700 transition"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <ul
              className="space-y-3 max-h-80 overflow-y-auto 
              scrollbar-thin scrollbar-thumb-gray-300
               dark:scrollbar-thumb-gray-600"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between
                   bg-gray-100 dark:bg-gray-700
                    p-4 rounded-lg shadow-lg"
                  data-aos="fade-right"
                  data-aos-duration="1300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[200px] h-[150px] object-cover
                     rounded-md shadow-md"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold
                     text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <span className="text-gray-600
                     dark:text-gray-300 text-base">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div
              className="border-t border-gray-300
               dark:border-gray-600 pt-4 flex justify-between items-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                Total: ${formattedTotal}
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={handleConfirmPurchase}
                  className="bg-blue-500 text-white
                   py-3 px-6 rounded-lg shadow-lg
                    hover:bg-blue-600 transition transform hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  Confirm
                </button>
                <button
                  onClick={onClose}
                  className="bg-red-500 text-white 
                  py-3 px-6 rounded-lg shadow-lg
                   hover:bg-red-600 transition transform hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
