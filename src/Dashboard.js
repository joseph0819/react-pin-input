import React, { useState } from "react";
import PinInput from "react-pin-input";
import { useNavigate } from "react-router-dom";
const LoginAuth = () => {
  const correctPin = "1234"; // Fixed PIN for demonstration
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  return <div></div>;
};

export default LoginAuth;
