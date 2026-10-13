import React from "react";

import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import OTP from "./pages/Otp";
import CreatePassword from "./pages/CreatePassword";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/createPassword" element={<CreatePassword />} />
    </Routes>
  );
};

export default App;
