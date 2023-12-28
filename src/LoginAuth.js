import React, { useState } from "react";
import PinInput from "react-pin-input";
import { useNavigate } from "react-router-dom";

const LoginAuth = () => {
  const correctPin = "9657"; // Fixed PIN for demonstration
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handlePinComplete = (value) => {
    setPin(value);
  };

  const handleLogin = () => {
    // Validate the entered PIN
    if (pin === correctPin) {
      // PIN is correct
      setSuccessMessage("🎉 Welcome back! Login successful!");
      setErrorMessage("");
      console.log("User logged in successfully");

      // Navigate to WelcomePage
      navigate("/welcome");
    } else {
      // PIN is incorrect
      setErrorMessage("❌ Incorrect PIN. Please try again.");
      setSuccessMessage("");
      console.log("Incorrect PIN attempt");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center pt-8 h-screen bg-black text-white">
        <h1 className="text-3xl font-bold mb-6">🔒 Secure Login</h1>
        <PinInput
          onComplete={handlePinComplete}
          length={4}
          focus
          secret
          secretDelay={500}
          inputStyle={{ borderColor: "white", color: "white" }}
          inputFocusStyle={{ borderColor: "lightgray" }}
        />

        <p className="mt-4">Enter your secure PIN to login✨</p>

        <button
          onClick={handleLogin}
          className="mt-8 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          🚀 Log In
        </button>

        {errorMessage && (
          <div className="mt-6 text-red-600 font-semibold">{errorMessage}</div>
        )}

        {successMessage && (
          <div className="mt-6 text-green-600 font-semibold">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginAuth;
