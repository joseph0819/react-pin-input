// src/components/PinInput.js
import React, { useState } from 'react';
import PinInput from 'react-pin-input';


const  PinAuth = () => {
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');

  const handlePinChange = (value) => {
    setPin(value);
    setMessage(''); // Clear previous messages when the PIN changes
  };

  const handlePinSubmit = () => {
    // Add your authentication logic here
    if (pin === '1234') {
      setMessage('Authentication successful! Redirecting...'); // Display success message
      // Redirect or perform other actions upon successful authentication
    } else {
      setMessage('Authentication failed. Please try again.'); // Display error message
      // Display error message or handle failed authentication
    }
  };

  return (
    <div className="login-container">
      <h2 className="text-2xl font-semibold mb-4"> to Your Banking App</h2>
      <p className="mb-2">Please enter your PIN to access your account:</p>
      <PinInput
        length={4}
        secret
      
        onComplete={handlePinSubmit} // Use onComplete instead of onChange for successful PIN entry
      />
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default PinAuth;
