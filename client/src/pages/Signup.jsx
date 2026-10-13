import { useState } from "react";

import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/user/register",
        formData,
      );
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>

          <p className="text-zinc-500 text-sm">
            Enter your email to create your account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-white transition"
            />
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-zinc-200 transition">
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-zinc-800"></div>

          <span className="text-xs text-zinc-600">OR CONTINUE WITH</span>

          <div className="flex-1 h-px bg-zinc-800"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium py-3 rounded-lg hover:bg-zinc-200 transition mb-3"
        >
          <span className="text-lg font-bold">G</span>
          Continue with Google
        </button>

        {/* Facebook Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white font-medium py-3 rounded-lg hover:bg-[#166fe5] transition"
        >
          <span className="text-lg font-bold">f</span>
          Continue with Facebook
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-zinc-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-white font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
