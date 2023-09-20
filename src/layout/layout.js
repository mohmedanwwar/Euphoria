  
  import React from "react";
  import Header from "../share/header.js";
  import Footer from "../share/footer.js";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
      <div>
  
        <Header/>
           <Outlet />
          <Footer />
      </div>
        
      );
}
 
export default Layout;