import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import BeautyProducts from '../pages/BeautyProducts';


import GroceriesProducts from '../pages/GroceriesProducts';

import Products from '../pages/Products';  // New Products page component

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        

        <Route path="/products" element={<Products />} />

        <Route path="/beauty" element={<BeautyProducts />} />

        <Route path="/groceries" element={<GroceriesProducts />} />
       
      </Route>
    </Routes>
  );
}

export default Router;
