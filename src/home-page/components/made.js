import React from "react";
import Screenshot7 from "../../assets/images/Screenshot7.png";
import Cover from "../../assets/images/cover.jpg";


const Made = () => {
    return (
      
        <div className="section section-made">
        <div className="row fashion" style={{width:"100%"}}>
          <div className="made col-6 col-md-12 col-sm-12" style={{backgroundImage:`url(${Cover})`}} >
        

               <div className="made-group">

              <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
              <p>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
              <button type="button">Shop Now </button>
              </div>
          </div>
          <div className="group col-6  col-md-12 col-sm-12" style={{backgroundImage:`url(${Screenshot7})`, height:"100%"}} >
          

          </div>
         
        </div>
      </div>  

      );
}
 
export default Made;