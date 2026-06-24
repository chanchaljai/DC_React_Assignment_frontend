import axios from "axios";
import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

type ApiErrorResponse = {
  message?: string;
  error?: string;
};

const Login = () => {
  const [formData, setFormData] = useState ({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/auth/login", formData);

      console.log(res);

      setMessage(res.data.message || "Login successful");
      // save in localstorage
      localStorage.setItem("role", res.data.role);
      // optional: token save (agar backend token bhej raha hai)
      if (res.data.token) {
      }
      // redirect after login
      setTimeout(() => {
        if (res.data.role === "admin") navigate("/dashboard/admin");
        else navigate("/dashboard/user");
      }, 1000);
    } catch (error: unknown) {
      console.error(error);
      if (axios.isAxiosError<ApiErrorResponse>(error)) {
        setMessage(
          error.response?.data?.message ||
            error.response?.data?.error ||
            "Login failed"
        );
        return;
      }

      setMessage("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-500 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        {message && <p className="text-center text-blue-600 mb-3">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-purple-600 font-semibold cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
