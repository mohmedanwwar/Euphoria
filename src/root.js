import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./home-page/home.js";
import Women from "./productlist/women-page/women.js";
import ProductList from './productlist/women-page/womenproduct';
import Profile from "./Profile/profile.js";
import Wishlist from "./Profile/wishlist.js";
import Deliveraddress from "./Profile/Deliveraddress.js";
import Chechout from "./checkout/chechout.js";
import Addcart from "./addcart/addcart.js";
import Layout from "./layout/layout.js";
import Notfound from "./notfound/notfound.js";



const Root = () => {
    
        return (

            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="ProductListWomen"  element={<ProductList />} />
                <Route path="Women"  element={<Women />} />
                <Route path="profile" element={<Profile />} />
                <Route path="chechout" element={<Chechout />} />
                <Route path="addcart" element={<Addcart />} />
                <Route path="deliveraddress" element={<Deliveraddress />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="*" element={<Notfound />} />
      
              </Route>
            </Routes>
          
      );
}
 
export default Root;