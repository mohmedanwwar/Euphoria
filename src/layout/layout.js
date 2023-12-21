  
  import React from "react";
  import Header from "../share/header.js";
  import Footer from "../share/footer.js";
  import Breadcrumb from "../share/breadcrumb.js";
import { Outlet } from "react-router-dom";
import ChangeColor from "../color/ColorBody.js";


const Layout = () => {
    return (
      <div>
  
        <Header/>
          <Breadcrumb />
          <ChangeColor />
           <Outlet />
          <Footer />
      </div>
        
      );
}
 
export default Layout;