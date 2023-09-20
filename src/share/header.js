import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    
    
        <div className="container">
         <nav className="navbar navbar-expand-lg  ">
   
      <Link className="navbar-brand " to="">
        <img src={logo} width="75px" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
       data-bs-target="#navbarText" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav m-auto  mb-lg-0 ">

            <li className="nav-item">
                <Link className="nav-link active" to="">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Men </Link>
              </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/ProductListWomen">Women</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Combos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Joggers </Link>
          </li>   
         </ul>

         <div className="Search ">
          <i className="fa-solid fa-magnifying-glass "></i>
          <input className="bnt" placeholder=" Search" /> 
        </div>
         
        <div className="d-flex ">
          <div className="icon"> <Link to="#"><i className="fa-regular fa-heart" ></i> </Link></div>
          <div className="icon active"> <Link to="/Profile"><i className="fa-regular fa-user" ></i></Link> </div>
          <div className="icon"> <Link to="/Addcart"><i className="fa-solid fa-cart-shopping" ></i></Link></div>
         </div>

      </div>
      
     
       </nav>
       
          </div>
           
   
      );
}
 
export default Header;