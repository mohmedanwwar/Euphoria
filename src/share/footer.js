import React from "react";
import google from "../assets/images/google.png";
import app from "../assets/images/app story.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <section className="info_section  layout_padding2-top">
        <div className="info_container ">
          <div className="container">

            <div className="row">
              <div className="col-md-6 col-lg-3">
                <h6>Need Help</h6>
               <ul className="nav flex-column ">
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Contact Us</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Track Order</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Returns & Refunds</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">FAQ's</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Career</Link></li>
                </ul>
              </div>
  
              <div className="col-md-6 col-lg-3">
                <h6>
                  Company
                </h6>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">About Us</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">euphoria Blog</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">euphoriastan</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Collaboration</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Media</Link></li>
                  </ul>
              </div>
  
              <div className="col-md-6 col-lg-3">
                <h6>
                  More Info
                </h6>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Term and Conditions </Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white"> Privacy Policy</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Shipping Policy</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Sitemap</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Media</Link></li>
                </ul>
              </div>
  
              <div className="col-md-6 col-lg-3">
                <h6>
                  Location
                </h6>
                 <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">support@euphoria.in</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white"> Eklingpura Chouraha, Ahmedabad Main Road</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</Link></li>
                </ul>
              </div>
            

             
              <div className="social_box col-lg-9   ">
                <Link to="">
                  <i className="social_icon fa-brands fa-facebook-f" ></i>
                </Link>
                <Link to="">
                  <i className="social_icon fa-brands fa-twitter" ></i>
                </Link>
                <Link to="">
                  <i className="social_icon fa-brands fa-instagram" ></i>
                </Link>
                <Link to="">
                  <i className="social_icon fa-brands fa-linkedin" ></i>
                </Link>
            </div>
            <div className="app col-lg-3">
              <h1>Download The App</h1>
              <Link to="#">  <img src={google} width="130px" /> </Link>
             <Link to="#">  <img src={app} width="100px" /> </Link>
             
             </div>
             </div>

             <footer className=" footer_section">
              {/*  */}
                  <hr/>
                  <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button class="accordion-button collapsed" 
                          type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color:"#fff"}}>
                          <p>Popular Categories</p> <i class="fa-solid fa-chevron-down" style={{color: "#ffffff"}}></i>
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                      <p>...</p>
                            </div>
                        </div>
                      </div>
                      <hr/>

              {/*  */}
               <span id="displayYear" />  
                <p><span> Copyright &copy; 2023 Euphoria Folks Pvt Ltd. All rights reserved. </span></p> 
           
             </footer>
          </div>
        </div>
      
        
        </section>
     );
}
 
export default Footer;