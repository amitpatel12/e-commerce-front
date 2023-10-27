import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()

  // the header and footer part show after the login only
  useEffect(()=>{
    setLogin(JSON.parse(localStorage.getItem('login')))
  },[location.pathname])


  
  // check verify user
  useEffect(()=> {
    const login =  JSON.parse(localStorage.getItem('login'))
    if(!login){
      navigate('/log-in')
    }
  },[])
 
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
