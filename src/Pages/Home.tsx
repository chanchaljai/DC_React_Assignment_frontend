import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-center">
        <h1 className="text-2xl font-bold mb-6">
          Welcome
        </h1>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/register")}
            className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
          >
            Register
          </button>

          <button
            onClick={() => navigate("/login")}
            className="bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;