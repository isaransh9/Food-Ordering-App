import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLoginDetails } from "../utils/userInfoSlice.js";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate(); // To handle redirecting

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form submission from reloading the page
    e.preventDefault();

    const { email, password, username } = formData;

    // Check if credentials are correct
    if (email === "saranshm10@gmail.com" && password === "Meena@123") {
      // Dispatch login details to redux store
      dispatch(addLoginDetails({ userName: username, email, password }));

      // After successful login, redirect to home page
      navigate("/home");
    } else {
      alert("Invalid credentials!"); // Handle invalid login attempt
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[400px] max-w-md">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6 text-center">
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
