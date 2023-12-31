import React, {Fragment, useEffect, useState} from "react"; 
import { Link } from "react-router-dom";

const ShopWomen = (props) => {

    console.log( props,"props")

  
    const url ="https://fakestoreapi.com/products";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }
    useEffect(() => {
       fetchInfo();
    }, [])

    props.func(data);
    
    const fiter = props.fiterdata ; 

  
    setTimeout(()=>{
       

    },200)

    let item ;
    if(fiter.length === 0){
        item = data
        console.log(item,"datafull")
    }else{
        item = fiter
        console.log(item,"filterdata")

    }

    
  
    return ( 

        <section className="shop_section layout_padding col-lg-9 col-md-9 col-sm-8">
             <div className="container">
                  <div className="header-text">
                        <h1>Women’s Clothing</h1>
                     <div className="recommend">
                        <span>New</span>
                        <p>Recommended</p>
                     </div>
                        
                  </div>
                  <div className="row">
                        {console.log("uuuuu",fiter)}
                        {(fiter.lenght != 0) ? 
                        (<Fragment>{console.log("done")}</Fragment>):
                        (<Fragment>{console.log("dfghj",fiter)}</Fragment>)}

                    {
                        item.map((dataObj) => (
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <Link to="/Women">

                                <div className="box">
                                    <img src={dataObj.image} className="img-fluid" />
                                    <div className="new">

                                    <label htmlFor={dataObj.id} className="like">
                                            <input type="checkbox" id={dataObj.id} className="chek" />
                                            <i className="fa-regular fa-heart"></i>
                                        </label>

                                    </div>
                                </div>

                                <div className="detail-box d-flex">
                                    <div className="text">
                                        <h5> {dataObj.title} </h5>
                                        <p>{dataObj.category}</p>
                                    </div>
                                    <div className="price">
                                        <span>  ${dataObj.price}  </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                            ))}
                  </div>
               </div>
       </section>
     );
}
 
export default ShopWomen;