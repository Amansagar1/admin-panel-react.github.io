import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import DashboardPages from './Pages/DashboardPages';
import LoginPages from './Pages/LoginPages';
import ProductsPages from './Pages/ProductsPages';
import AddNewProductsPages from './Pages/AddNewProductsPages';
import AccountPages from './Pages/AccountPages';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path='/Topbar' element={<Topbar />} />
        <Route path="/dashboard" element={<DashboardPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/products" element={<ProductsPages />} />
        <Route path="/add-new-product" element={<AddNewProductsPages />} />
        <Route path="/account" element={<AccountPages />} />
        <Route path="*" element={<LoginPages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
