 import React,{Component} from "react";
import { Link } from "react-router-dom";


 const Profile = () => {
 
   const logout = () => {
    sessionStorage.clear();
    window.open('/', '_self')
  
}
    return (
        <div className="container"> 
            <div className="profile-seaction">

                <div className="way">
                    <h6> 
                        Home 
                        <i className="fa-solid fa-angle-right" style={{color: "#807D7E"}}></i> 
                        My Account 
                        <i className="fa-solid fa-angle-right" style={{color: "#807D7E"}}></i> 
                        <span> Personal Info</span>
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
                                  <Link className="nav-link" to="#"> <i className="fa-regular fa-folder"></i> My orders</Link></li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/wishlist"> <i className="fa-regular fa-heart" ></i>  Wishlist</Link></li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/profile"> <i className="fa-regular fa-user" ></i>  My info</Link></li>
                          <li className="nav-item">
                              <Link className="nav-link" onClick={logout} ><i className="fa-solid fa-arrow-right-from-bracket"></i> Sign out</Link></li>
                        </ul>
              
                      
                  </nav>
                
                  <div className="forms">
                  <h1>My Info</h1>
                    <h4>Contact Details</h4>

                    <label htmlFor="yourname">Your Name</label><br/>
                        <input type="text" id="yourname" name="yourname" value="Jhanvi Shah"/> 
                        <button>Change</button><br/><hr/> 

                        <label htmlFor="emailaddress">Email Address</label><br/>
                        <input type="email" id="emailaddress" name="emailaddress" value="Jhanvi@gmail.com"/>
                        <button>Change</button><hr/>
                        

                        <label htmlFor="Phone">Phone Number</label><br/>
                        <input type="number" id="Phone" name="Phone" value="8980252445"/>
                        <button>Change</button><hr/>
                        

                        <label htmlFor="Password">Password</label><br/>
                        <input type="password" id="Password" name="Password" value="01149277781"/>
                        <button>Change</button><hr/>

                        <div className="address">
                        <div className="add">
                                <h2>Address</h2>
                                <Link to="/Deliveraddress"><button  className="edit"> Add New </button></Link>
                          </div>
                          
                          <div className="details-address">
                                    <div className="address1">
                                        <h3> Jhanvi shah</h3>
                                        <span>8980252445</span>
                                        <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
                                        <button className="btn-address">Home</button>
                                        <button className="btn-address">Default billing address</button>
                                        <button className="edit"> Remove </button>
                                        <button  className="edit"> Edit </button>
                                    </div>

                                    <div className="address1">
                                        <h3> Jhanvi shah</h3>
                                        <span>8980252445</span>
                                        <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
                                      <div className="but1"> 
                                        <button className="btn-address">Home</button>
                                        <button className="btn-address">Default billing address</button>
                                      </div>
                                        <button className="edit"> Remove </button>
                                        <button  className="edit"> Edit </button>
                                    </div>
                            </div>

                            <div className="details-address">
                                    <div className="address2">
                                        <h3> Jhanvi shah</h3>
                                        <span>8980252445</span>
                                        <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
                                        <div> <button className="btn-address">Office</button></div><br/>
                                        <div className="morebut">
                                        <button className="edit"> Remove </button>
                                        <button  className="edit"> Edit </button>
                                        <button className="edit"> Set as default </button>
                                        </div>
                                          
                                    </div>

                                    <div className="address2">
                                        <h3> Jhanvi shah</h3>
                                        <span>8980252445</span>
                                        <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
                                      <div> <button className="btn-address">Home2</button></div><br/>
                                        <div className="morebut">
                                        <button className="edit"> Remove </button>
                                        <button  className="edit"> Edit </button>
                                        <button className="edit"> Set as default </button>
                                        </div>
                                            
                                        
                                    </div>
                                    
                                </div>

                        </div>
                  </div> 
                
                </div>
            </div>

        </div>

      );
 }
  
 export default Profile;