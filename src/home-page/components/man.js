  import React from "react";
  import polo from "../../assets/images/polo.png";
  import man4 from "../../assets/images/man4.jpeg";
  import printed from "../../assets/images/printed.png" ;
  import plain from "../../assets/images/plain.png";
  import rectangle from "../../assets/images/Rectangle 28.png";
  import jeans from "../../assets/images/jans.png";
 import photograp from "../../assets/images/photograp.png";
 import boxers from "../../assets/images/boxers.png";
 


const Man = () => {
    return ( 
           
            <div className="section ">
            <h2 className="section_title">
         Categories For Men
          </h2>
        <div className="Categories">

           <div className="row">

           
           <div class="card col-sm-6 col-md-4  col-lg-3" >
              <img src={man4} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"> Shirts <br/>
                <p class="card-text">Explore Now!</p>
                </h5>
                <a href="/">
                <i class="fa-solid fa-arrow-right" style={{color: "#797979;"}}></i>
                  </a>
              </div>
           </div> 

           <div class="card col-sm-6 col-md-4  col-lg-3" >
              <img src={printed} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"> Printed T-Shirts <br/>
                <p class="card-text">Explore Now!</p>
                </h5>
                <a href="/">
                <i class="fa-solid fa-arrow-right" style={{color: "#797979;"}}></i>
                  </a>
              </div>
           </div>

           <div class="card col-sm-6 col-md-4  col-lg-3" >
              <img src={plain} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"> Plain T-Shirt <br/>
                <p class="card-text">Explore Now!</p>
                </h5>
                <a href="/">
                <i class="fa-solid fa-arrow-right" style={{color: "#797979;"}}></i>
                  </a>
              </div>
           </div>

           
           <div class="card col-sm-6 col-md-4  col-lg-3" >
              <img src={polo} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"> Polo T-Shirt <br/>
                <p class="card-text">Explore Now!</p>
                </h5>
                <a href="/">
                <i class="fa-solid fa-arrow-right" style={{color: "#797979;"}}></i>
                  </a>
              </div>
           </div>
                
           <div class="card col-sm-6 col-md-4  col-lg-3" >
              <img src={rectangle} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"> Hoodies & Sweetshirt <br/>
                <p class="card-text">Explore Now!</p>
                </h5>
                <a href="/">
                <i class="fa-solid fa-arrow-right" style={{color: "#797979;"}}></i>
                  </a>
              </div>
           </div>

           <div class="card col-sm-6 col-md-4  col-lg-3" >
              <img src={jeans} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"> Jeans <br/>
                <p class="card-text">Explore Now!</p>
                </h5>
                <a href="/">
                <i class="fa-solid fa-arrow-right" style={{color: "#797979;"}}></i>
                  </a>
              </div>
           </div>
             
           <div class="card col-sm-6 col-md-4  col-lg-3" >
              <img src={photograp} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"> Activewear <br/>
                <p class="card-text">Explore Now!</p>
                </h5>
                <a href="/">
                <i class="fa-solid fa-arrow-right" style={{color: "#797979;"}}></i>
                  </a>
              </div>
           </div>
           <div class="card col-sm-6 col-md-4  col-lg-3" >
              <img src={boxers} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"> Boxers <br/>
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
 
export default Man;