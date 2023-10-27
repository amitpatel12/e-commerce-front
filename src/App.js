import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useSearchParams, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  const [login, setLogin] = useState(false)
  const location = useLocation()

  useEffect(()=>{
    setLogin(JSON.parse(localStorage.getItem('login')))

  },[location.pathname])
 
  return (
    <div className="overflow-hidden">
    
        {
          login && <Header />
        }
    
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/log-in" element={<Login />}></Route>
        </Routes>
        {
          login && <> 
            <Sidebar />
        <Footer />
          </>
        }
      
    
    </div>
  );
};

export default App;
