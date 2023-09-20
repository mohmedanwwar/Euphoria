import React from "react";
import unsplash from "../../assets/images/unsplash.jpg";
import unsplash1 from "../../assets/images/image.jpg";
import { Link } from "react-router-dom";

const Items = () => {
    return ( 
        <div className="row ">
        <div className="items">

        <div className="item col-sm-6 col-md-4  col-lg-3" style={{backgroundImage:`url(${unsplash})`}}>
              <h5> Low Price </h5>
               <h2>High Coziness</h2>
               <p>UPTO 50% OFF</p>
               <Link to="/"> <span> Explore Items</span> </Link>
          </div>
          <div className="item " style={{backgroundImage:`url(${unsplash1})`}}>
              <h5> Beyoung Presents </h5>
               <h2>Breezy Summer <br/> Style</h2>
               <p>UPTO 50% OFF</p>
               <Link to="/"> <span> Explore Items</span> </Link>
          </div>
        </div>
       
             </div>
     );
}
 
export default Items;