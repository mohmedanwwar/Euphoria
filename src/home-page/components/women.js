import React from "react";
import Hoodies from "../../assets/images/Hoodies.png";
import Coats from "../../assets/images/Coats.png";
import Tees from "../../assets/images/Tees.png";
import womenboxers from "../../assets/images/womenboxers.jpg";


const Women = () => {
    return ( 
        <div className="section ">
        <h2 className="section_title">
             Categories For Women
          </h2>

          <div className="Categories">
          <div className="row">

                                          
          <div class="card col-sm-6 col-md-4  col-lg-3" >
                <img src={Hoodies} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title"> Hoodies & Sweetshirt  <br/>
                  <p class="card-text">Explore Now!</p>
                  </h5>
                  <a href="/">
                  <i class="fa-solid fa-arrow-right" style={{color: "#797979;"}}></i>
                    </a>
                </div>
              </div> 

              <div class="card col-sm-6 col-md-4  col-lg-3" >
                <img src={Coats} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Coats & Parkas <br/>
                  <p class="card-text">Explore Now!</p>
                  </h5>
                  <a href="/">
                  <i class="fa-solid fa-arrow-right" style={{color: "#797979;"}}></i>
                    </a>
                </div>
              </div>


              <div class="card col-sm-6 col-md-4  col-lg-3" >
                <img src={Tees} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Boxers <br/>
                  <p class="card-text">Explore Now!</p>
                  </h5>
                  <a href="/">
                  <i class="fa-solid fa-arrow-right" style={{color: "#797979;"}}></i>
                    </a>
                </div>
              </div>

              <div class="card col-sm-6 col-md-4  col-lg-3" >
                <img src={womenboxers} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">  Tees & T-Shirt <br/>
                  <p class="card-text">Explore Now!</p>
                  </h5>
                  <a href="/">
                  <i class="fa-solid fa-arrow-right" style={{color: "#797979;"}}></i>
                    </a>
                </div>
              </div>
            

              </div>
           
            </div>
           </div>
     );
}
 
export default Women;