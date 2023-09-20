 import React from "react";
 import shop from "../../assets/images/shop.jpg" ;
 import woman2 from "../../assets/images/woman2.jpeg" ;
import { Link } from "react-router-dom";

 const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
                  <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions"
                       data-bs-slide-to="0"  class="active"  aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={shop} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption ">

                        <h5>T-shirt / Tops</h5>
                          <h1>Summer Value Pack</h1>
                          <h5>cool / colorful / comfy</h5>
                         <Link to="">  <button>Shop Now </button> </Link> 
                        </div>
                      </div>

                      <div class="carousel-item">
                        <img src={woman2} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption">
                          <h5>T-shirt / Tops</h5>
                          <h1>Summer Value Pack</h1>
                          <h5>cool / colorful / comfy</h5>
                         <Link to="/Woman">  <button>Shop Now </button> </Link> 
                        </div>
                      </div>

                    </div>
                    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
                      <span class="carousel-control-prev-icon " aria-hidden="true" style={{width:"80px"}}></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                   </div>
      );
 }
  
 export default Carousel;