

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="text-white bg-[#0F172A] shadow:md">
        <Header />
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
