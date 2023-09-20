 import React from "react";

const Deliveraddress = () => {

    return ( 

      <div className="container">
         <section className="delivery-address">
              
            <div className="way">
            <h6> 
                Home 
                <i className="fa-solid fa-angle-right" style={{color: "#807D7E"}}></i> 
                My Account 
                <i className="fa-solid fa-angle-right" style={{color:" #807D7E"}}></i> 
                 <span>  Delivery Address</span>
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
                         <a className="nav-link" href="#"> <i className="fa-regular fa-heart" ></i>  Wishlist</a></li>
                     <li className="nav-item">
                         <a className="nav-link" href="profile.html"> <i className="fa-regular fa-user" ></i>  My info</a></li>
                     <li className="nav-item">
                         <a className="nav-link" href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i> Sign out</a></li>
                   </ul>
                 
            </nav>
              
               <form className="row g-3 needs-validation" noValidate  action="#" name="form" onSubmit="numberValidation()">
               <h1>My Info</h1>
                <h4>Add Address</h4>
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
                <div className="col-md-6">
                  <label htmlFor="validationCustom05" className="form-label">City*</label>
                  <input type="text" className="form-control" id="validationCustom05" placeholder="City" required/>
                  <div className="invalid-feedback">
                    Please provide a valid City.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="validationCustom06" className="form-label">State*</label>
                  <select className="form-select" id="validationCustom06" placeholder="State" required>
                    <option selected disabled value="">State</option>
                    <option>...</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                  <div className="valid-feedback">
                    Looks good!
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


                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Postal Code*</label>
  
                    <input type="text" name="numbers"   id="validationCustom07"  className="form-control" placeholder="Postal Code" required />
                       <span id="numberText"></span>
  
                    <div className="invalid-feedback">
                      Please enter Numeric value
                    </div>
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="validationCustom05" className="form-label">Delivery Instruction</label>
                    <textarea className="form-control" placeholder="Delivery Instruction" ></textarea> 
                  </div>
                

                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                    <label className="form-check-label" htmlFor="invalidCheck">
                     Set as default shipping address
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                      <label className="form-check-label" htmlFor="invalidCheck">
                        Save my information for a faster checkout
                      </label>
                      <div className="invalid-feedback">
                        Set as default biling address
                      </div>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                  </div>

                <div className="col-12">
                    <button className="btn " type="submit">  <i className="fa-solid fa-cart-shopping" ></i> 
                        <span> Save</span> 
                          <i className="fa-solid fa-arrow-right-long" style={{color: "#fff"}}></i>  </button>
                    <button className="btn cancel-btn" type="submit"> <span>Cancel</span></button>
                  </div>
              </form>
          </div>
         </section>
      </div>
     );
}
 
export default Deliveraddress;