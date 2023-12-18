import React, { useState } from "react";
import woman4 from "../assets/images/woman4.jpeg";
import women from "../assets/images/women.jpeg";
import { Link } from "react-router-dom";

const Addcart = () => {

  const [price, setPrice] = useState(29.00);
  const [price1, setPrice1] = useState(119.00);
  const [price2, setPrice2] = useState(123.00);
  const [shipping, setShipping] = useState(5.00);

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


   
    const handleIncrement = () => {
      setCount(count + 1);
    };

    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    }

    const calculateTotalPrice = () => {
      return count * price;
    };



    const handleIncrement1 = () => {
      setCount1(count1 + 1);
    };

    const handleDecrement1 = () => {
      if (count1 > 0) {
        setCount1(count1 - 1);
      }
    }

    const calculateTotalPrice1 = () => {
      return count1 * price1;
    }; 



    const handleIncrement2 = () => {
      setCount2(count2 + 1);
    };

    const handleDecrement2 = () => {
      if (count2 > 0) {
        setCount2(count2 - 1);
      }
    }
    const calculateTotalPrice2 = () => {
      return count2 * price2;
    };


    const subtotal = () =>{

      return calculateTotalPrice() + calculateTotalPrice1() + calculateTotalPrice2();

    }
    console.log(subtotal())


    const sumShipping = () =>{
      if (subtotal() > 0){
       return subtotal() + shipping
      }

    }
    console.log(sumShipping())


    return ( 
        <div className="container"> 
       

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

                <td><span id="price">${price}</span></td>
                <td >
                  <div className="quantity">
                    <span  onClick={handleDecrement}  className="minus">-</span>
                    <span className="num">{count}</span>
                    <span  onClick={handleIncrement} className="plus">+</span>
                  </div>
                
                </td>
                <td><p>FREE</p></td>
                <td><span>${calculateTotalPrice()}</span></td>
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

                <td> <span>${price1}</span>
                </td>
                <td >
                  <div className="quantity">
                    <span  onClick={handleDecrement1}  className="minus">-</span>
                    <span className="num">{count1}</span>
                    <span  onClick={handleIncrement1} className="plus">+</span>
                  </div>
                  

                </td>
                <td><p>FREE</p></td>
                <td><span>${calculateTotalPrice1()}</span></td>
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

                <td><span>${price2}</span></td>
                <td >
                <div className="quantity">
                    <span  onClick={handleDecrement2}  className="minus">-</span>
                    <span className="num">{count2}</span>
                    <span  onClick={handleIncrement2} className="plus">+</span>
                  </div>
                  

                </td>
                <td><p>$5.00</p></td>
                <td><span>${calculateTotalPrice2()}</span></td>
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
                        <h5> ${subtotal()}.00</h5>  
                      </li>
                    <li> 
                      <h1>Shipping</h1>  
                     <h5>-${shipping}.00</h5> 
                    </li>
                  </ul>

                 </div>

                 <div className="item-order"> 
                  <ul>
                    <li>
                       <span>Grand Total</span> 
                        <span> ${sumShipping()}.00 </span>  
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