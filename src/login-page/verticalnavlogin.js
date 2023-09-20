import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const LoginVeritcal = () => {
    return ( 
        <nav className="navbar navbar-expand-lg  ">
        
            <Link className="navbar-brand " to="/login">
            <img src={logo} width="75px" /></Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#Text" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="collapse navbar-collapse" id="Text">
                        <ul className="navbar-nav m-auto  mb-lg-0 ">

                            <div className="Search ">
                                <i className="fa-solid fa-magnifying-glass "></i>
                                <input className="bnt" placeholder=" Search" /> 
                            </div>  

                            <div className="lang ">
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        English (united States)
                                
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </ul>
                        
                        <div className="login-btn">
                            <button type="button" class="btn-login ">Login</button>
                            <button type="button" class="btn-sign btn-outline-primary"> <span>Sign Up</span></button>
                        </div>
                    </div>
        </nav>
     );
}
 
export default LoginVeritcal;