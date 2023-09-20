import React, {useEffect, useState} from "react"; 
import VerticlNav from "./vertical-nav";
import ShopWomen from "./shop-women";

const ProductList = () => {          
    return ( 
     
        <div className="container">
            <div className="row">

              <VerticlNav /> 

                 <ShopWomen />
                 
            </div>
        </div>
     );
  
}
 
export default ProductList ;