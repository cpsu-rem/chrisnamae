import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";



import WomenProducts from '../pages/WomenProducts';
import Products from '../pages/Products';

import MenProducts from '../pages/MenProducts.jsx';  
const  Router=()=> {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        

        <Route path="/mensclothing" element={<MenProducts />} />
        <Route path="/allproducts" element={<Products />} />

        

        <Route path="/womensclothing" element={<WomenProducts />} />
       
      </Route>
    </Routes>
  );
}

export default Router;
