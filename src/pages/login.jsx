import { useState } from "react";
import api from "../api/AxiosConfig.js"
import { Navigate, useNavigate } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/login", formData);

      console.log("Response:", response.data);

      alert("Login Successful");

      Navigate("/home");

    } catch (err) {
      console.error(err);

      if (err.response) {
        setError(err.response.data.message || "Login failed");
      } else {
        setError("Server not reachable");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      
      {/* Header */}
      <header className="flex items-center justify-center h-20 bg-orange-500 text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          Incedo Inc
        </h1>
      </header>

      {/* Body */}
      <div className="flex-1 bg-gray-600 flex items-center justify-center">
        <div className="container mx-auto max-w-md p-10 bg-yellow-200 rounded-lg shadow-md">

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Error Message */}
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-center h-10 bg-black text-white">
        <p className="text-sm md:text-base lg:text-lg">
          &copy; 2024 Incedo Inc. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default Login;