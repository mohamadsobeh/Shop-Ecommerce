import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebasee";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        alert("You must be registered before logging in");
        setEmail("");
        setPassword("");
        navigate("/RegisterPage");
      });
  };

  return (
    <div className="lg:px-20 sm:px-12 px-6 bg-white
     dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <div className="min-h-screen flex items-center justify-center 
      rounded-lg bg-gradient-to-r from-gray-900 to-teal-500">
        <div
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl
           shadow-lg w-full max-w-md"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1
            className="text-3xl font-semibold text-center
             text-gray-800 dark:text-white mb-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            LogIn to Your Account
          </h1>

          <form onSubmit={signIn}>
            <div className="mb-4">
              <label className="block text-sm font-medium
               text-gray-600 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border
                 border-gray-300 rounded-md
                  focus:outline-none focus:ring-2
                   focus:ring-teal-400 dark:bg-gray-700
                    dark:border-gray-600 dark:text-white"
                required
                data-aos="fade-left"
                data-aos-delay="100"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium
               text-gray-600 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300
                 rounded-md focus:outline-none focus:ring-2
                  focus:ring-teal-400 dark:bg-gray-700
                   dark:border-gray-600 dark:text-white"
                required
                data-aos="fade-left"
                data-aos-delay="300"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white 
              font-semibold rounded-lg hover:bg-teal-600 
              transition duration-300 focus:ring-4 focus:ring-teal-300"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              LogIn
            </button>
          </form>

          <p
            className="text-center text-sm text-gray-600
             dark:text-gray-400 mt-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Don't have an account?{" "}
            <Link to="/register" className="text-teal-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
