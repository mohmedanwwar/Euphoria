import React from "react"; 
import nike from "../../assets/images/nike.png";
import puma from "../../assets/images/puma.png";
import levis from "../../assets/images/levis.png";
import Poloassn from "../../assets/images/Poloassn.png";
import HM from "../../assets/images/HM.png";


const Prand = () => {
    return (
        <div className="section prand">
        <h1>Top Brands Deal</h1>
        <p>Up To <span>60% </span>off on brands</p>

        <div className="prands">
              <div className="photoos">
                  <img src={nike} />
              </div>
              <div className="photoos" >
              <img src={HM} />
              </div>
              <div className="photoos">
              <img src={levis} />
            
              </div>
              <div className="photoos">
              <img src={Poloassn} />

              </div>
              <div className="photoos">
              <img src={puma} />
              
              </div>
        </div>
      
       
        </div>
      );
}
 
export default Prand;