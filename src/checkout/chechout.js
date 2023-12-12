import React, { useEffect } from "react";
import { useState } from "react";
import Frame440 from "../assets/images/Frame 440.svg";
import Frame441 from "../assets/images/Frame 441.svg";
import Frame442 from "../assets/images/Frame 442.svg";
import Frame443 from "../assets/images/Frame 443.svg";

const Checkout = () => {

  useEffect (()=>{
    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {

      form.addEventListener('submit', event => {

        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()  
        }

        form.classList.add('was-validated')
      }, false)
    })
    
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#id_password');
    togglePassword.addEventListener('click', function (e) {
  
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
     
      this.classList.toggle('fa-eye');
  
   }) 

  })

 useEffect (()=>{




})


  const validation = (e) =>{

  
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
   
  
  };

  
    return (  
        <div className="container">
             <div className="chechout-seaction">


             <div className="row">

             <div className="header">
                <h2>
                  Check Out
                  </h2>
                  <p>
                    Billing Details
                  </p>
            </div>
              

            <div className="col-lg-8">

                 <form className="row g-3 needs-validation" noValidate  action="#" name="form" >

                <div className="col-md-6">
                  <label htmlFor="validationCustom01" className="form-label">First name*</label>
                  <input type="text" className="form-control" id="validationCustom01" placeholder="First name"  required/>
                  <div className="invalid-feedback">
                    Please provide a valid First name.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="validationCustom02" className="form-label">Last name*</label>
                  <input type="text" className="form-control" id="validationCustom02" placeholder="Last name"  required/>
                  <div className="invalid-feedback">
                    Please provide a valid Last name.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
               
                <div className="col-md-6">
                  <label htmlFor="validationCustom03" className="form-label">Country / Region*</label>
                  <input type="text" className="form-control" id="validationCustom03" placeholder="Country / Region" required/>
                  <div className="invalid-feedback">
                    Please provide a valid Country / Region.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="validationCustom03" className="form-label">Company Name</label>
                  <input type="text" className="form-control" id="validationCustom03"  placeholder="Company Name"/>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="validationCustom04" className="form-label">Street Address*</label>
                  <input type="text" className="form-control" id="validationCustom04" placeholder="Street Address" required/>
                  <div className="invalid-feedback">
                    Please provide a valid Street Address.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="validationCustom04" className="form-label">Apt, suite, unit</label>
                  <input type="text" className="form-control" id="validationCustom04"  placeholder="Apt, suite, unit"/>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="validationCustom05" className="form-label">City*</label>
                  <input type="text" className="form-control" id="validationCustom05" placeholder="City" required/>
                  <div className="invalid-feedback">
                    Please provide a valid City.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="validationCustom06" className="form-label">State*</label>
                  <select className="form-select" id="validationCustom06"  defaultValue={"State"} placeholder="State" required>
                    <option value={"State"}  disabled >State</option>
                    <option value={"1"}>...</option>
                    <option value={"2"}>........ </option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="validationCustom05" className="form-label">Postal Code*</label>

                  <input type="text" name="numbers"   id="validationCustom07"  className="form-control" placeholder="Postal Code" required />
                     <span id="numberText"></span>

                  <div className="invalid-feedback">
                    Please enter Numeric value
                  </div>
                
                </div>

                <div className="col-md-6">
                  <label htmlFor="validationCustom05" className="form-label">Phone*</label>
                  <input type="text" className="form-control" id="validationCustom08" placeholder="Phone" required/>
                  <div className="invalid-feedback">
                    Please provide a valid Phone.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                
                <div className="col-12">
                  <button className="btn btn-primary" type="submit"> <span>Continue to delivery</span></button>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Save my information for a faster checkout
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                </div>
                </form>

                <hr/>
                 
                <div className="accordion accordion-flush" id="accordionFlushExample">
                       
                  <div className="accordion-item">
                  <h2 className="accordion-header">

                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                     aria-expanded="false" aria-controls="flush-collapseOne">
                       <div className="d-block"> 
                        <h1>  Shipping Address</h1>
                        <p>Select the address that matches your card or payment method.</p>
                       </div>
                    </button> 
                  </h2>

                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">

                       <div className="form-radio">
                        <input type="radio" id="address" name="fav_language" /> 
                          <label htmlFor="address">   Same as Billing address</label>
                       </div>
                     
                      <hr/>
                      <div className="form-radio">
                        <div className="radio">
                          <input type="radio" id="address1" name="fav_language" /> 
                      <label htmlFor="address1">  Use a different shipping address</label>
                    </div>

                      </div>

                    </div>
                  </div>
                  </div>

                  <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                     <h1> Shipping Method</h1>
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                         <h2>  Arrives by Monday, June 7</h2>
                           
                            <hr/>
                            <h2>  Delivery Charges </h2>
                            <p> Additional fess may apply</p>
                            <span>$5.00</span>
                           

                      </div>
                  </div>
                  </div>

                  <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <div className="d-block">
                        <h1>  Payment Method</h1>
                        <p>All transactions are secure and encrypted.</p>
                      </div>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                       <input type="radio" id="Payment" name="paymant-Method" value="Payment"/>
                        <label htmlFor="Payment">
                        <h2>Credit Card</h2>
                        <p>We accept all major credit cards.</p>
                      </label>
                      <div className="more-payment">

                           <div className="payment">
                           <ul className="nav " id="myTab"> 

                           <li className="nav-item" >
                                <button className="nav-link active" id="pay-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" 
                                  type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                    <label>
                                       <input type="radio" id="Payment" name="Payment-Method" value="Payment"/>
                                       <img src={Frame440}/>
                                      
                                    </label>
                                 </button>
                               </li>
                               <li className="nav-item" >
                                <button className="nav-link " id="visa-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" 
                                  type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                    <label>
                                       <input type="radio" id="Payment" name="Payment-Method" value="Payment"/>
                                        <img src={Frame441}/>
                                    </label>
                                 </button>
                               </li>
                               <li className="nav-item" >
                                 <button className="nav-link " id="paypal-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" 
                                   type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                     <label>
                                        <input type="radio" id="Payment" name="Payment-Method" value="Payment"/>
                                         <img src={Frame442}/>
                                      
                                     </label>
                                  </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button className="nav-link" id="paypass-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" 
                                  type="button" role="tab" aria-controls="user-tab-pane" aria-selected="false">
                                   <label>
                                          <input type="radio" id="Payment" name="Payment-Method" value="Payment"/>
                                           <img src={Frame443}/>
                                     </label>
                                </button>
  
                                </li>
                           </ul>

                           <div className="tab-content" id="myTabContent">

                          <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="pay-tab" tabIndex="0">  

                          <div className="option-payment">

                          <div className="row">
                            <div className="col-md-6">
                              <input type="text" className="form-control"  placeholder="Card number" maxLength="16" />
                            </div>
                            <div className="col-md-6">
                              <input type="text" className="form-control"  placeholder="Name of card" />
                            </div>
                            <div className="col-md-6">
                              <input type="date" className="form-control"  placeholder="Expiration date (MM/YY)" />
                            </div>

                            <div className=" hidepass col-md-6">
                              <input type="password" name="password"  className="form-control"  autoComplete="current-password" required="" id="id_password"/>
                              <i className="far fa-eye-slash" id="togglePassword" ></i>
                          </div>
                        </div>
                        </div>
                          </div>
                              
                           <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="user-tab" tabIndex="0">
                              
                        <div className="option1-payment">
                          <div className="row">
                            <h3>Buyer Name</h3>
                            <div className="col-md-6">
                              <input type="text" className="form-control"  placeholder="First Name" />
                            </div>
                            <div className="col-md-6">
                              <input type="text" className="form-control"  placeholder=" Last Name" />
                            </div>
                            <h3>Buyer E-mail</h3>
                            <div className="col-md-6">
                              <input type="email" className="form-control"  placeholder="example@example.com" />
                            </div>
                
                            <div className="col-md-12">
                              <input type="email" className="form-control"  placeholder="Street Address" />
                            </div>

                            <div className="col-md-6" >
                              
                              <input type="date" className="form-control"  placeholder="Expiration date (MM/YY)" />
                            </div>
                            <div className=" hidepass col-md-6">
                             
                                <input type="passwords" name="passwords"  className="form-control"  autoComplete="current-password" required="" id="id_passwords"/>
                                <i className="far fa-eye" id="togglePasswords" ></i> 
                            
   
                            </div>
                        </div>
                        </div>
                           </div>

                           </div>

                            </div>
                         </div>

                         <hr/>

                         <div className="form-radio">
                        <input type="radio" id="delivery" name="paymant-Method" value="delivery"/>
                          <label htmlFor="delivery">
                          <h2>Cash on delivery</h2>
                          <p>Pay with cash upon delivery.</p>
                        </label>
                        </div>

                        <hr/>

                        <div className="form-radio">
                        <input type="radio" id="Paypol" name="paymant-Method" value="Paypol"/>
                          <label htmlFor="Paypol"><h3>Paypol</h3></label>
                      </div>

                    </div>
                  </div>
                  </div>
                </div>

                    <button className="pay-now" type="submit"> Pay Now</button>
                </div>

                  <div className="col-lg-4">

                <div className="order-summary">

                  <div className="box">

                  <div className="heading">
                    <h1>Order Summary</h1>
                    <hr/>
                  </div>

                  <div className="orders">
                    <div className="photo">
                    </div>

                    <div className="order"> 
                      <ul>
                        <li>Flower Print Crop Top x 1 </li>
                        
                        <li> Colour :<span> Levender</span> </li>
                      </ul>
                     </div>
                     <span>$29.00</span>
                   
                  </div>
                  <hr/>

                  <div className="orders">
                    <div className="photo">
                     
                    </div>
                    <div className="order"> 
                      <ul>
                        <li>Flower Print Crop Top x 1 </li>
                        <li> Colour :<span> Levender</span> </li>
                      </ul>
                     </div>
                        <span>$29.00</span>
                   
                  </div>

                  <hr/>
                
                  <div className="orders">
                    <div className="photo">
                    </div>
                    <div className="order"> 
                      <ul>
                        <li>Flower Print Crop Top x 1 </li>
                        <li> Colour :<span> Levender</span> </li>
                      </ul>
                     </div>
                        <span>$29.00</span>
                   
                  </div>


                  <hr/>

                  <div className="item-order"> 
                    <ul>
                      <li> <h1> Subtotal <span> ( 3 items ) </span></h1>   <h5> $513.00</h5>  </li>
                      <li> <h1>Savings</h1>  
                       <h5>-$30.00</h5> </li>
                    </ul>
                   </div>
                   
                     <hr/>

                     <div className="item-order"> 
                      <ul>
                        <li><h1>Shipping </h1> 
                           <h5>$5.00</h5> </li>
                      </ul>
                     </div>
                      <hr/>

                      <div className="item-order"> 
                        <ul>
                          <li><h1>Total </h1> 
                            <h5>$478.00</h5></li>
                        </ul>
                      </div>
                 

                  

                </div>
              </div>
                 </div>

        </div>
        </div>
        </div>
    );
}
 
export default Checkout;