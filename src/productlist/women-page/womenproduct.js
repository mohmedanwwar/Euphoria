import React, {useEffect, useState} from "react"; 
import VerticlNav from "./vertical-nav";
import ShopWomen from "./shop-women";

const ProductList = () => {          
    const [fulldata,setFullData] = useState([])
    const [fiter,setFilter] = useState([])

    


    const pull_data = (data) => {
        setFullData(data);
      }
      const fakedata = fulldata;

      const data_filter = (filterData) =>{
        setFilter(filterData)
        

      }
      const dataFilter = fiter
      console.log("fghjk",dataFilter)

    return ( 
     
        <div className="container">
            <div className="row">

              <VerticlNav senddata={fakedata}  item={data_filter} /> 

                 <ShopWomen  fiterdata={dataFilter} func={pull_data}/>
                 
            </div>
        </div>
     );
  
}
 
export default ProductList ;