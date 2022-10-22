import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";

import LoginForm from "./components/LoginForm";
import PrivateRoutes from "./Routes/PrivateRoutes";
import Profile from "./components/pages/Profile";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/login" element={<LoginForm />} />
        
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
                <Route path="/add" element={<AddProduct />} />
                    <Route path="/update/:id" element={<UpdateProduct />} />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoutes>
                                <Profile />
                            </PrivateRoutes>
                        }
                    />
        </Routes>
        
        <Footer />
        
      </Router>
      
    </>
  );
}

export default App;