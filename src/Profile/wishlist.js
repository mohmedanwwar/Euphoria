 import React from "react";
 import woman2 from "../assets/images/woman2.jpeg";
 import woman3 from "../assets/images/woman3.jpeg";
 import woman4 from "../assets/images/woman4.jpeg";
 import woman from "../assets/images/woman.jpeg";
import { Link } from "react-router-dom";



const Wishlist = () => {
    return ( 
        <div className="container">
             <div className="wishlist-secation">
               <div className="way">
                <h6> 
                    Home 
                    <i className="fa-solid fa-angle-right" style={{color: "#807D7E"}}></i> 
                    My Account 
                    <i className="fa-solid fa-angle-right" style={{color: "#807D7E"}}></i> 
                     <span> Wishlist </span>
                 </h6>
               </div>
                 <div className="row">

            <nav className="Vertical-nav">
                    <h2>
                     Hello Jhanvi
                   </h2>
                   <p>
                     Welcome to your Account
                   </p>
                 <ul className="navbar-nav">
                     <li className="nav-item">
                            <a className="nav-link" href="#"> <i className="fa-regular fa-folder"></i> My orders</a></li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/wishlist"> <i className="fa-regular fa-heart" ></i>  Wishlist</Link></li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/profile"> <i className="fa-regular fa-user" ></i>  My info</Link></li>
                     <li className="nav-item">
                         <a className="nav-link" href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i> Sign out</a></li>
                   </ul>
         
            </nav>

            <div className="wishlist">
                <h1>Wishlist</h1>

               
                    <div className="alert  fade show" role="alert">
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <div className="orders">
                            <div className="photo" style={{backgroundImage: `url(${woman2})`, backgroundSize: "cover"}}>
                        </div>
                    
                         <div className="item-order"> 

                            <ul>
                              <li>
                                 <h1> Blue Flower Print Crop Top</h1>    
                                </li>

                              <li> 
                                <h1>color: <span> Yellow</span></h1>  
                              </li>

                              <li>
                                <h1> Quantity :  <span>1</span></h1>    
                               </li>
                            </ul>
          
                           </div>
                       
                      </div>
                      
                      <div className="pricebtn">
                        <h1>
                            $29.00
                        </h1>
                        <button type="submit">
                            Add to cart
                        </button>
                       </div>
                    </div>

                    <div className="alert   d-flex fade show" role="alert">
                      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      <div className="orders">
                      <div className="photo" style={{backgroundImage: `url(${woman3})`, backgroundSize: "cover"}}>

                      </div>
                  
                       <div className="item-order"> 

                          <ul>
                            <li>
                               <h1> Blue Flower Print Crop Top</h1>    
                              </li>

                            <li> 
                              <h1>color: <span> Yellow</span></h1>  
                            </li>

                            <li>
                              <h1> Quantity :  <span>1</span></h1>    
                             </li>
                          </ul>
        
                         </div>
                     
                    </div>
                    
                    <div className="pricebtn">
                      <h1>
                          $29.00
                      </h1>
                      <button type="submit">
                          Add to cart
                      </button>
                     </div>
                  </div>

                  <div className="alert   d-flex fade show" role="alert">
                    
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    <div className="orders">
                      <div className="photo" style={{backgroundImage: `url(${woman4})`, backgroundSize: "cover"}}>
                       
                    </div>
                
                     <div className="item-order"> 

                        <ul>
                          <li>
                             <h1> Blue Flower Print Crop Top</h1>    
                            </li>

                          <li> 
                            <h1>color: <span> Yellow</span></h1>  
                          </li>

                          <li>
                            <h1> Quantity :  <span>1</span></h1>    
                           </li>
                        </ul>
      
                       </div>
                   
                  </div>
                  
                  <div className="pricebtn">
                    <h1>
                        $29.00
                    </h1>
                    <button type="submit">
                        Add to cart
                    </button>
                   </div>
                </div>

                <div className="alert   d-flex fade show" role="alert">
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  <div className="orders">
                  <div className="photo" style={{backgroundImage: `url(${woman})`, backgroundSize: "cover"}}>

                  </div>
              
                   <div className="item-order"> 

                      <ul>
                        <li>
                           <h1> Blue Flower Print Crop Top</h1>    
                          </li>

                        <li> 
                          <h1>color: <span> Yellow</span></h1>  
                        </li>

                        <li>
                          <h1> Quantity :  <span>1</span></h1>    
                         </li>
                      </ul>
    
                     </div>
                 
                </div>
                
                <div className="pricebtn">
                  <h1>
                      $29.00
                  </h1>
                  <button type="submit">
                      Add to cart
                  </button>
                 </div>
              </div>
                       
                
            </div>

            </div>
             </div>
        </div>
     );
}
 
export default Wishlist;