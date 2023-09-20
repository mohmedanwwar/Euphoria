import React from "react";
import Screenshot5 from "../../assets/images/Screenshot5.png";
import Screenshot4 from "../../assets/images/Screenshot4.png";
import Screenshot3 from "../../assets/images/Screenshot3.png";
import Screenshot2 from "../../assets/images/Screenshot2.png";
import Screenshot from "../../assets/images/Screenshot .png";


const Bigsaving = () => {
    return (
        <div className="section big-saving">
        <h2 className="section_title">
        Big Saving Zone
       </h2>
         <div className="saving">
            <div className="row g-3 pt-2">
             <div className="images  col-lg-4" >
             <img src={Screenshot3} ></img>
             </div>
             <div className=" images  col-lg-4" >
             <img src={Screenshot2} ></img>
               </div>
               <div className=" images col-lg-4" >
               <img src={Screenshot} ></img>
               </div>
               <div className="images  col-lg-6" >
               <img src={Screenshot4} ></img>
               </div>

               <div className="images  col-lg-6" >
               <img src={Screenshot5} ></img>
                   </div>
               </div>
         </div>
      
         
      </div>
      );
}
 
export default Bigsaving;