import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartPage, Category, Home, Profile, ViewBook, Error, Signup, Signin } from "./pages";
import { Navbar, Sidebar, Footer, Feedback, Checkout, SendToken, PrivateRoute } from "./components";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthWrapper from "./components/AuthWrapper";


function App() {
  return (
    <AuthWrapper>
      <Router>
        <ToastContainer position="top-center" />
        <Navbar />
        <Sidebar />
        <Feedback />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          } />
          <Route path="/checkout" element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          } />
          <Route path="/viewbook/:id" element={<ViewBook />} />
          <Route path="/send-token" element={<SendToken />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
