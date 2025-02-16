import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Firebasee";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
