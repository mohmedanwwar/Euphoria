  
  import React from "react";
  import Header from "../share/header.js";
  import Footer from "../share/footer.js";
  import Breadcrumb from "../share/breadcrumb.js";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
      <div>
  
        <Header/>
          <Breadcrumb />
           <Outlet />
          <Footer />
      </div>
        
      );
}
 
export default Layout;