import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "./Firebasee";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        phoneNumber,
        address,
        createdAt: new Date(),
      });
      navigate("/login");
    } catch (error) {
      console.error("Error during sign-up:", error);
      setError("Registration failed! Please try again.");
    }
  };

  return (
    <div className="lg:px-20 sm:px-12 px-6 bg-white
     dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <div className="min-h-screen flex items-center justify-center 
      rounded-lg bg-gradient-to-r from-gray-900 to-teal-500">
        <div
          className="w-full max-w-3xl bg-white dark:bg-gray-800
           p-8 rounded-2xl shadow-lg"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1
            className="text-3xl font-bold text-center
             text-gray-800 dark:text-white mb-6"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Create Your Account
          </h1>

          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}

          <form
            onSubmit={signUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <InputField
              label="Full Name"
              type="text"
              value={fullName}
              onChange={setFullName}
              data-aos="fade-left"
            />
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              data-aos="fade-left"
              data-aos-delay="200"
            />
            <InputField
              label="Phone Number"
              type="text"
              value={phoneNumber}
              onChange={setPhoneNumber}
              data-aos="fade-left"
              data-aos-delay="400"
            />
            <InputField
              label="Address"
              type="text"
              value={address}
              onChange={setAddress}
              data-aos="fade-left"
              data-aos-delay="600"
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              data-aos="fade-left"
              data-aos-delay="800"
            />
            <InputField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              data-aos="fade-left"
              data-aos-delay="1000"
            />
            <div
              className="col-span-1 md:col-span-2"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <button
                type="submit"
                className="w-full py-3 bg-teal-500
                 text-white font-semibold rounded-lg
                  hover:bg-teal-600 transition duration-300 
                  focus:ring-4 focus:ring-teal-300"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p
            className="text-center text-sm text-gray-600
             dark:text-gray-400 mt-4"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            Already have an account?{" "}
            <Link to="/login" className="text-teal-500 hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, type, value, onChange, ...props }) => (
  <div>
    <label className="block text-sm font-medium
     text-gray-700 dark:text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-4 border border-gray-300 
      rounded-md focus:outline-none focus:ring-2
       focus:ring-teal-400 dark:bg-gray-700
        dark:border-gray-600 dark:text-white transition-all duration-200"
      required
      {...props}
    />
  </div>
);

export default RegisterPage;
