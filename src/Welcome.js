import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center pt-8 h-screen px-8 text-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-6">
        📚 Welcome to Maitama High!
      </h1>
      <p className="text-lg mb-4">
        Get ready for an exciting academic journey!
      </p>

      <div className="text-center">
        <p className="mb-4">
          Explore the vast resources and opportunities within the school portal.
          🏫
        </p>
        <p>
          Your learning adventure begins now. Embrace knowledge, connect with
          peers, and excel in every endeavor. 🚀
        </p>
        <button className="bg-blue-500 text-white px-16 py-2 rounded-full mt-8 hover:bg-blue-600 transition duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Welcome;
