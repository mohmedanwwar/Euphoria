import React from "react";
import woman4 from "../assets/images/woman4.jpeg";
import women from "../assets/images/women.jpeg";
import { Link } from "react-router-dom";

const Addcart = () => {
    return ( 
        <div className="container"> 
         <div className="way">
            <h6> 
                Home 
                <i className="fa-solid fa-angle-right" style={{color:" #807D7E"}}></i>  
                 <span> Add To Cart</span>
             </h6>
        </div>

        <div className="Test">
          <p>Please fill in the fields below and click place order to complete your purchase!</p>
        <p>Already registered?<a href="#">  Please login here</a></p>
        </div>

        <table className="table table-borderless">
            <thead>
              <tr className="table-dark ">
                <th className="Productdetails" scope="col">Product Details</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">shipping</th>
                <th scope="col">subtotal</th>
                <th scope="col">action</th>
              </tr>
            </thead>

            <tbody>
              <tr >

                <th scope="row"> 
                      <div className="orders">
                        <div className="photo" style={{backgroundImage:`url(${woman4})`, backgroundSize: "cover"}} >
                    </div>

                    <div className="order"> 
                      <ul>
                        <li>Blue Flower Print Crop Top </li>               
                        <li> <span>Colour : Levender</span> </li>
                        <li> <span>  Size : M </span> </li>
                      </ul>
                     </div>
                    
                   
                  </div>
                </th>

                <td> <span>$29.00</span></td>
                <td >
                  <div className="quantity">
                    <span className="minus">-</span>
                    <span className="num">1</span>
                    <span className="plus">+</span>
                  </div>
                
                </td>
                <td><p>FREE</p></td>
                <td><span>$29.00</span></td>
                <td>
                  <a href="#">
                    <i className="fa-regular fa-trash-can" style={{color: "#8A33FD", fontSize: "20px"}}></i>
  
                    </a>
                </td>
              </tr>
              <tr>

                <th scope="row">  
                     <div className="orders">
                    <div className="photo">
                    </div>

                    <div className="order"> 
                      <ul>
                        <li>Flower Print Crop Top x 1 </li>
                        <li> <span>Colour : Levender</span> </li>
                        <li> <span>  Size : XXL </span> </li>
                      </ul>
                     </div>
                    
                  </div>
                </th>

                <td> <span>$119.00</span>
                </td>
                <td >
                  <div className="quantity">
                    <span className="minus">-</span>
                    <span className="num">2</span>
                    <span className="plus">+</span>
                  </div>
                  

                </td>
                <td><p>FREE</p></td>
                <td><span>$119.00</span></td>
                <td>                       
                    <i className="fa-regular fa-trash-can" style={{color:" #8A33FD", fontSize: "20px"}}></i>

                </td>
               
              </tr>
              <tr>

                <th scope="row"> 
                      <div className="orders">
                        <div className="photo"
                         style={{backgroundImage: `url(${women})`, backgroundSize:"cover", backgroundPosition: "center"}}>
                    </div>

                    <div className="order"> 
                      <ul>
                        <li>Flower Print Crop Top x 1 </li>
                        
                        <li> <span>Colour : Levender</span> </li>
                        <li> <span>  Size : XXL </span> </li>
                      </ul>
                     </div>
                   
                   
                  </div>
                </th>

                <td><span>$123.00</span></td>
                <td >
                  <div className="quantity">
                    <span className="minus">-</span>
                    <span className="num">2</span>
                    <span className="plus">+</span>
                  </div>
                  

                </td>
                <td><p>$5.00</p></td>
                <td><span>$123.00</span></td>
                <td>
                  <a href="#">
                    <i className="fa-regular fa-trash-can" style={{color:" #8A33FD", fontSize:"20px"}}></i>
      
                  </a>
                </td>
               
              </tr>
            </tbody>
      </table>

      <div className="row bottomtext">
            <div className="col-md-7">
              <h1>Discount Codes</h1>
              <p>Enter your coupon code if you have one</p>
                <div className="Apply" > <input type="text"/>
                  <button>Apply Coupon</button>
                </div>
           <a> <button><span> Continue Shopping</span></button></a>
            </div>

            <div className=" col-md-5">
              <div className="total">
                <div className="item-order"> 

                  <ul>
                    <li>
                       <h1> Sub Total <span /></h1> 
                        <h5> $513.00</h5>  
                      </li>
                    <li> 
                      <h1>Shipping</h1>  
                     <h5>-$5.00</h5> 
                    </li>
                  </ul>

                 </div>

                 <div className="item-order"> 
                  <ul>
                    <li>
                       <span>Grand Total</span> 
                        <span> $518.00 </span>  
                       </li>
                   </ul>
                 </div>

                <hr />
                <div className="Checkbtn"> 
                  <Link to="/Chechout">
                  <button type="submit">
                  <span>Proceed To Checkout</span>
                   </button>
                  </Link>
                 
              </div>
              
              </div> 
            </div>
          </div>

        </div>   
     );
}
 
export default Addcart;