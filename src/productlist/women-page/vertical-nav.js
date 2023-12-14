import React, { useEffect, useState } from "react";
import myJavaScriptFile from "./range-input.js";
const VerticlNav = (props) => {


    const [minvalue, setMinvalue] = useState();
    const [maxvalue, setMaxvalue] = useState();
    const [value,setValue] = useState([]);


    const filter = (e)=> {
        console.log("nav00",filterdata)

        const x =  filterdata.filter(item=>item.price > minvalue && item.price < maxvalue )
         console.log(filterdata[0])
         console.log(x)
         setValue(x)
         
    }
    console.log("011",value)

    props.item(value);

      useEffect(() =>{

        const rangeInput = document.querySelectorAll(".range-input input"),
        priceInput = document.querySelectorAll(".price-input input"),
        range = document.querySelector(".slider .progress");
        let priceGap = 0;
        priceInput.forEach(input =>{
            input.addEventListener("input", e =>{
                let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);
                
                if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                    if(e.target.className === "input-min"){
                        rangeInput[0].value = minPrice;
                        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                    }else{
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });

        rangeInput.forEach(input =>{
            input.addEventListener("input", e =>{
                let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);
                setMinvalue(minVal)
                setMaxvalue(maxVal)
                if((maxVal - minVal) < priceGap){
                    if(e.target.className === "range-min"){
                        rangeInput[0].value = maxVal - priceGap
                    }else{
                        rangeInput[1].value = minVal + priceGap;
                    }
                }else{
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                   
                }
            });
        });
      })

      const filterdata  =  props.senddata;
      console.log(filterdata)

      console.log("min;",minvalue);
      console.log("max",maxvalue)

    
    
    return ( 

        <nav className="Vertical-nav col-lg-3 col-md-3 col-sm-4">
             <div className="show"> 
          
        <div className="filter">
            <p>Filter</p>

           <button className="btn btn " onClick={filter} ><i className="fa-solid fa-filter d-flex" ></i> </button> 
           
        </div>
        
            <div className="filters">
                <div className="accordion accordion-flush" id="accordionFlushExample">

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            < span> Tops</span> <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the 
                        <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
                            <span>   Printed T-shirts </span> <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                    </div>
                        
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">
                            <span> Kurti </span> <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                    </div>
                        
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapseOne">
                            <span> Boxers </span> <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        </h2>
                        <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapsefife" aria-expanded="false" aria-controls="flush-collapseOne">
                            <span>Full sleeve T-shirts </span> <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        </h2>
                        <div id="flush-collapsefife" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                    </div>
                        
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapseOne">
                            <span>Joggers </span> <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        </h2>
                        <div id="flush-collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseseven" aria-expanded="false" aria-controls="flush-collapseOne">
                            <span>Payjamas </span> <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        </h2>
                        <div id="flush-collapseseven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapsee" aria-expanded="false" aria-controls="flush-collapseOne">
                            <span> Jeans </span> <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        </h2>
                        <div id="flush-collapsee" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                
                    </div>

                </div>            
                
                <div className="filter-price">
                    <div className="accordion accordion-flush" id="accordionFlushExample1">
                <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo">
                        <span>Price</span>
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                
                                    
                            <div className="slider">
                                <div className="progress">
                                    
                                </div>
                            </div>
                            
                            <div className="range-input">
                                <input type="range" className="range-min" defaultValue="180" min="0" max="10000" />
                                <input type="range" className="range-max" defaultValue="700" min="0" max="10000"/>

                                
                            </div>


                            <div className="price-input">

                                <div className="filed">
                                    <input type="number" className="input-min" defaultValue="70"/>

                                </div>
                                <div className="filed">
                                    <input type="number" className="input-max" defaultValue= '600'/>

                                </div>

                                

                            </div>




                            </div>
                            </div>
                        </div>
                        </div>


                    
                </div>

                <div className="filter-color">
                <div className="accordion accordion-flush" id="accordionFlushExample1">
                <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span>Colors</span>
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                <div className="color">
                                    
                                    <div className="colors">
                                        <ul>
                                            <li>
                                            <label htmlFor="Purple"   style={{background: "#8434E1"}}>
                                            <input type="checkbox" id="Purple" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> Purple</span> </li>

                                        </ul>
                                            
                                        <ul>
                                            <li>
                                            <label htmlFor="black"   style={{background: "#232323"}}>
                                            <input type="checkbox" id="black" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> Black</span> </li>

                                        </ul>

                                        <ul>
                                            <li>
                                            <label htmlFor="Red"   style={{background: "#F35528"}}>
                                            <input type="checkbox" id="Red" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> Red</span> </li>

                                        </ul>

                                        <ul>
                                            <li>
                                            <label htmlFor="Orange"   style={{background: "#F16F2B"}}>
                                            <input type="checkbox" id="Orange" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> Orange</span> </li>

                                        </ul>

                                    </div>

                                        
                                    <div className="colors">
                                        <ul>
                                            <li>
                                            <label htmlFor="Navy"   style={{background: "#345EFF"}}>
                                            <input type="checkbox" id="Navy" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> Navy</span> </li>

                                        </ul>
                                        
                                        <ul>
                                            <li>
                                            <label htmlFor="White"   style={{background: "#fff"}}>
                                            <input type="checkbox" id="White" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> White</span> </li>

                                        </ul>

                                        <ul>
                                            <li>
                                            <label htmlFor="Broom"   style={{background: "#D67E3B"}}>
                                            <input type="checkbox" id="Broom" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> Broom</span> </li>

                                        </ul>

                                        <ul>
                                            <li>
                                            <label htmlFor="Grren"   style={{background: "#48BC4E"}}>
                                            <input type="checkbox" id="Grren" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> Grren</span> </li>

                                        </ul>

                                    </div>

                                        
                                    <div className="colors">

                                    <ul>
                                            <li>
                                            <label htmlFor="Yellow"   style={{background: "#FDC761"}}>
                                            <input type="checkbox" id="Yellow" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> Yellow</span> </li>

                                        </ul>

                                        <ul>
                                            <li>
                                            <label htmlFor="Grey"   style={{background: "#E4E5E8"}}>
                                            <input type="checkbox" id="Grey" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> Grey   </span> </li>

                                        </ul>

                                        <ul>
                                            <li>
                                            <label htmlFor="Pink"   style={{background: "#E08D9D"}}>
                                            <input type="checkbox" id="Pink" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> Pink</span> </li>

                                        </ul>

                                        <ul>
                                            <li>
                                            <label htmlFor="Blue"   style={{background: "#3FDEFF"}}>
                                            <input type="checkbox" id="Blue" className="radio" name="tt" />
                                            </label>
                                            </li>
                                            <li>  <span> Blue</span> </li>

                                        </ul>

                                    </div>

                                
                                </div>                                     
                            </div>
                            </div>
                        </div>
                        </div>
                    
            
                </div>

                <div className="filter-size">
                <div className="accordion accordion-flush" id="accordionFlushExample1">
                <div class="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">
                            <span>Size</span>
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                        <div className="extra-optional">
                            <div className="size">
                                
                                <label htmlFor="chek" >
                                    <input type="checkbox" id="chek" className="chek" name="size" />
                                    <span>XXS</span>
                                </label>

                                <label htmlFor="cheksm" >
                                    <input type="checkbox" id="cheksm" className="chek" name="size" />
                                    <span>XL</span>
                                </label>


                                <label htmlFor="chekm"  >
                                    <input type="checkbox" id="chekm" className="chek" name="size" />
                                    <span>XS</span>
                                </label>
                            </div>

                                <div className="size">

                                <label htmlFor="cheklb">
                                    <input type="checkbox" id="cheklb" className="chek" name="size" />
                                    <span>S</span>
                                </label>

                                <label htmlFor="chekxa">
                                    <input type="checkbox" id="chekxa" className="chek" name="size" />
                                    <span>M</span>
                                </label>

                                <label htmlFor="chekax" >
                                    <input type="checkbox" id="chekax" className="chek" name="size" />
                                    <span>L</span>
                                </label>

                            </div>

                            <div className="size">
                                <label htmlFor="chekx">
                                    <input type="checkbox" id="chekx" className="chek" name="size" />
                                    <span>XXL</span>
                                </label>

                                <label htmlFor="chekxl" >
                                    <input type="checkbox" id="chekxl" className="chek" name="size" />
                                    <span>3XL</span>
                                </label>

                                <label htmlFor="chekxn">
                                    <input type="checkbox" id="chekxn" className="chek" name="size" />
                                    <span>4XL</span>
                                </label>
                                

                            
                            </div>
                        </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    
            
                </div>

                <div className="filter-style">
                <div className="accordion accordion-flush" id="accordionFlushExample1">
                <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#four" aria-expanded="false" aria-controls="collapseTwo">
                            <span> Dress Style</span>
                            </button>
                            </h2>
                            <div id="four" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {/*  */}
                                <div className="accordion-items">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#one" aria-expanded="false" aria-controls="collapseTwo">
                            < span> Classic</span> <i className="fa-solid fa-chevron-right"></i>
                            
                            </button>
                            </h2>
                            <div id="one" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            
                            </div>
                            </div>
                                </div>

                                <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#two" aria-expanded="false" aria-controls="collapseTwo">
                                        < span> Casual</span> <i className="fa-solid fa-chevron-right"></i>

                                        </button>
                                        </h2>
                                        <div id="two" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        
                                        </div>
                                        </div>
                                </div>

                                <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#three" aria-expanded="false" aria-controls="collapseTwo">
                                        <span> Business</span> <i className="fa-solid fa-chevron-right"></i>

                                        </button>
                                        </h2>
                                        <div id="three" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        
                                        </div>
                                        </div>
                                </div>

                                <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#three" aria-expanded="false" aria-controls="collapseTwo">
                                        <span> Sport</span> <i className="fa-solid fa-chevron-right"></i>

                                        </button>
                                        </h2>
                                        <div id="three" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        
                                        </div>
                                        </div>
                                </div>

                                <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#three" aria-expanded="false" aria-controls="collapseTwo">
                                        <span> Elegant</span> <i className="fa-solid fa-chevron-right"></i>

                                        </button>
                                        </h2>
                                        <div id="three" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        
                                        </div>
                                        </div>
                                </div>

                                <div className="accordion-item">
                                        <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#three" aria-expanded="false" aria-controls="collapseTwo">
                                        <span> Formal (evening)</span> <i className="fa-solid fa-chevron-right"></i>

                                        </button>
                                        </h2>
                                        <div id="three" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        
                                        </div>
                                        </div>
                                </div>

                            </div>
                            </div>
                        </div>
                        </div>
                    
            
                </div>
                
       </div>
     
     
       </nav>
     );
}
 
export default VerticlNav;