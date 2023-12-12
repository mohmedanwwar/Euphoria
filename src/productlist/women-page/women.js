import React from "react";
import Rectangle2 from "../../assets/images/Rectangle 2.png";
import Rectangle from "../../assets/images/Rectangle 13.png";
import Rectangle3 from "../../assets/images/Rectangle 10 (1).png" ;
import woman from "../../assets/images/woman.jpeg" ;
import women from "../../assets/images/women.jpeg" ;
import woman2 from "../../assets/images/woman2.jpeg" ;
import woman3 from "../../assets/images/woman3.jpeg" ;
import man from "../../assets/images/man.jpeg" ;
import man2 from "../../assets/images/man2.jpeg" ;
import man3 from "../../assets/images/man3.jpeg" ;
import man4 from "../../assets/images/man4.jpeg" ;
import man5 from "../../assets/images/man5.jpeg" ;
import { Link } from "react-router-dom";

const Women = () => {
    return ( 

        <><section className="prodetails">
            <div className="container">
                <hr />
                <div className="row carousel slide" id="carouselExampleIndicators">

                    <div className="small-image col-lg-1 col-md-1">

                        <div className="small-group-image">
                            <div className="carousel-indicators">

                                <a href="#" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                                    aria-label="Slide 1">
                                    <img src={Rectangle2} />
                                </a>
                                <a href="#" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                                    <img src={Rectangle} />
                                </a>
                                <a href="#" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                                    <img src={Rectangle3} />
                                </a>
                                <a href="#" className=" icon-up" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <i className="fa-solid fa-chevron-up" style={{color:" #000"}}></i>
                                </a>

                                <a href="#" className="icon-down" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <i className="fa-solid fa-chevron-down" style={{color: "#fafafa"}}> </i>

                                </a>

                            </div>

                        </div>
                    </div>


                    <div className="single-image col-lg-5 col-md-5 ">
                        <div className="carousel-inner">

                            <div className="carousel-item ">
                                <img src={Rectangle2} alt="" width="100%" className="d-block w-100" />
                            </div>

                            <div className="carousel-item active">
                                <img src={Rectangle} alt="" width="100%" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src={Rectangle3} alt="" width="100%" className="d-block w-100" />
                            </div>
                        </div>

                    </div>



                    <div className="col-lg-6 col-md-6">
                        <div className="details-product">
                          

                            <h1>Raven Hoodie With <br />Black colored Design</h1>

                            <div className="star">
                                <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
                                <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
                                <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
                                <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
                                <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
                                <span>3.5</span>
                                <i className="fa-regular fa-comment-dots" style={{color: "#807D7E"}}></i>
                                <p>120 comment</p>
                            </div>

                            <div className="optional">
                                <h2>  Select Size </h2>

                                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Size Guide <i className="fa-solid fa-arrow-right-long" style={{color: "#807D7E"}}></i>
                                </button>


                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="extra-optional">
                                <div className="size">
                                    <label htmlFor="chek">
                                        <input type="radio" id="chek" className="chek" name="size" />
                                        <span>XS</span>
                                    </label>

                                    <label htmlFor="cheksm">
                                        <input type="radio" id="cheksm" className="chek" name="size" />
                                        <span>S</span>
                                    </label>


                                    <label htmlFor="chekm">
                                        <input type="radio" id="chekm" className="chek" name="size" />
                                        <span>M</span>
                                    </label>


                                    <label htmlFor="chekl">
                                        <input type="radio" id="chekl" className="chek" name="size" />
                                        <span>L</span>
                                    </label>



                                    <label htmlFor="chekx">
                                        <input type="radio" id="chekx" className="chek" name="size" />
                                        <span>XL</span>
                                    </label>
                                </div>
                            </div>

                            <h3>Colours Available</h3>

                            <div className="color">

                                <label htmlFor="black">
                                    <input type="radio" id="black" className="radio" name="tt" />

                                    <i className="fa-solid fa-circle"
                                     style={{color: "#232323" , border:"1px solid  #232323" , borderRadius: "10px", marginRight: "20px",cursor: "pointer"}}> </i>
                                </label>

                                <label htmlFor="yellow">
                                    <input type="radio" id="yellow" className="radio" name="tt" />
                                    <i className="fa-solid fa-circle yellow" 
                                    style={{color: "#EDD146",  border: "1px solid  #EDD146", borderRadius: "10px ", marginRight: "20px",cursor:"pointer"}}> </i>
                                </label>

                                <label htmlFor="benk">
                                    <input type="radio" id="benk" className="radio" name="tt" />
                                    <i className="fa-solid fa-circle" 
                                    style={{color:" #EB84B0", border: "1px solid  #EDD146", borderRadius: "10px", marginRight: "20px", cursor:"pointer"}}> </i>
                                </label>

                                <label htmlFor="red">
                                    <input type="radio" id="red" className="radio" name="tt" />
                                    <i className="fa-solid fa-circle" 
                                    style={{color: "#9C1F35", border: "1px solid  #EDD146", borderRadius: "10px", marginRight: "20px", cursor:"pointer"}}> </i>
                                </label>

                            </div>

                            <div className="buton">
                                <Link to="/Addcart">
                                    <button type="button" className="btn shop"><i className="fa-solid fa-cart-shopping"></i><span> Add to cart</span></button>

                                </Link>
                                <button type="button" className="btn  prices"><span> $63.00</span></button>
                            </div>
                            <hr />
                            <div className="more-optional">

                                <div className="optional1">
                                    <div className="icon">
                                        <i className="fa-regular fa-credit-card"></i>
                                    </div>
                                    <div className="texts">
                                        <p>Secure payment</p>
                                    </div>
                                </div>

                                <div className="optional2">
                                    <div className="icon">
                                        <i className="fa-solid fa-shirt"></i>
                                    </div>
                                    <div className="texts">
                                        <p>Size & Fit</p>
                                    </div>
                                </div>
                            </div>

                            <div className="more-optional">

                                <div className="optional1">
                                    <div className="icon">
                                        <i className="fa-solid fa-truck"></i>
                                    </div>
                                    <div className="texts">
                                        <p>Free shipping</p>
                                    </div>
                                </div>

                                <div className="optional2">
                                    <div className="icon">
                                        <i className="fa-solid fa-arrow-rotate-left"></i>
                                    </div>
                                    <div className="texts">
                                        <p>Free Shipping & Returns</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            </section>

            {/* end section */}

         <section className="prodction_section layout_padding">
            <div className="container">

            <h2>
            Product Description
            </h2>

            <div className="row">
            <div className="descrption col-sm-12 col-md-12 col-lg-6">

                <div className="title">
             <div className="list">

               <ul className="nav " id="myTab">

                      <li className="nav-item" >
                         <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" 
                         type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Description</button>
                      </li>
                     
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="user-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" 
                        type="button" role="tab" aria-controls="user-tab-pane" aria-selected="false">User comments <span>21</span></button>
                   </li>
                <li className="nav-item" role="presentation">
                      <button className="nav-link" id="question-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" 
                      type="button" role="tab" aria-controls="question-tab-pane" aria-selected="false">Question & Answer <span className="black"> 4</span></button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="description-tab" tabIndex="0">  
                   <p>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling 
                    & no fading. Provide all-time comFort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
                  </div>
                    
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="user-tab" tabIndex="0">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat provident, fuga quam, excepturi placeat deserunt quod, 
                    iste ipsum similique vero magnam illum cum quisquam corrupti tenetur illo necessitatibus rerum. Rerum!</p>
                  </div>

                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="question-tab" tabIndex="0">
                  <p>What is frontend in software?</p>
                </div>
              
              </div>

             
            </div>
        
    </div>

    <div className="tap">

      <div className="horizonal">

        <div className=" nobord ">
       <div className="pargh">
        <p>Fabric</p>
        <h6>Bio-washed Cotton</h6>
       </div>
        <hr/>
      </div>

        <div className=" bord ">
          <div className="pargh">
            <p>Pattern</p>
            <h6>Printed</h6>  
          </div>
          <hr/>
        </div>
        
       
        <div className=" bord ">
         <div className="pargh">

          <p>Fit</p>
          <h6>Regular-fit</h6>

         </div>
         <hr/>
        </div>
  
     </div>
    
      <div className="horizonal">

       <div className=" nobord ">
        
        <div className="pargh">
          <p>Neck</p>
          <h6>Round Neck</h6>
        </div>
       </div>

       <div className=" bord ">
        <div className="pargh">
          <p>Sleeve</p>
          <h6>Half-sleeves</h6>
        </div>
      </div>

       <div className=" bord">
        <div className="pargh">
          <p>Style</p>
        <h6>Casual Wear</h6>
        </div>
       </div>

      </div>
     
    </div>
  </div>

  <div className=" col-sm-12 col-md-12 col-lg-6">
    <div className="media" style={{backgroundImage:`url(${women})`}}>
     <span>1:00 M</span>
     <a href="https://www.youtube.com/watch?v=BATVa4vGZto" target="_blank">
       <i className="fa-solid fa-circle-play" style={{color: "#dee2e8"}}></i>
     </a>
     <p>Raven Hoodie with black colored design</p>
    </div>
     
 </div>
  
</div>

           </div>
         </section>

      {/* end section  */}
     
        <section className="shop_section layout_padding">
             <div className="container">
                    <h2>
                        Similar Products
                    </h2>

                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <a href="">
                                <div className="box" style={{backgroundImage:`url(${woman})`}}>
                                    <div className="new">

                                        <label htmlFor="chek" className="like">
                                            <input type="checkbox" id="chek" className="chek" />
                                            <i className="fa-regular fa-heart"></i>
                                        </label>
                                    </div>
                                </div>

                                <div className="detail-box d-flex">
                                    <div className="text">
                                        <h5>  White T-Shirt </h5>
                                        <p>Priya’s Brand</p>
                                    </div>
                                    <div className="price">
                                        <span>  $200  </span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <a href="">
                                <div className="box" style={{backgroundImage: `url(${man})` }}>
                                    <div className="new">

                                        <label htmlFor="chek1" className="like">
                                            <input type="checkbox" id="chek1" className="chek" />
                                            <i className="fa-regular fa-heart"></i>
                                        </label>
                                    </div>
                                </div>

                                <div className="detail-box d-flex">
                                    <div className="text">
                                        <h5>  Dark Green Sweatshirt.... </h5>
                                        <p>Roboto’s  Brand</p>
                                    </div>
                                    <div className="price">
                                        <span>  $127.00  </span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <a href="">
                                <div className="box" style={{backgroundImage: `url(${woman2})`}}>
                                    <div className="new">

                                        <label htmlFor="chek2" className="like">
                                            <input type="checkbox" id="chek2" className="chek" />
                                            <i className="fa-regular fa-heart"></i>
                                        </label>

                                    </div>
                                </div>

                                <div className="detail-box d-flex">
                                    <div className="text">
                                        <h5>  Levender Sweatshirt .... </h5>
                                        <p>Jhanvi’s Brand</p>
                                    </div>
                                    <div className="price">
                                        <span>  $133.00  </span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <a href="">
                                <div className="box" style={{backgroundImage:`url(${man2})` }}>
                                    <div className="new">
                                        <label htmlFor="chek3" className="like">
                                            <input type="checkbox" id="chek3" className="chek" />
                                            <i className="fa-regular fa-heart"></i>
                                        </label>

                                    </div>
                                </div>

                                <div className="detail-box d-flex">
                                    <div className="text">
                                        <h5>  Urban jacket with white .... </h5>
                                        <p>Sagar’s Brand</p>
                                    </div>
                                    <div className="price">
                                        <span>  $79.00 </span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <a href="">
                                <div className="box" style={{backgroundImage:`url(${man3})`}}>
                                    <div className="new">

                                        <label htmlFor="chek4" className="like">
                                            <input type="checkbox" id="chek4" className="chek" />
                                            <i className="fa-regular fa-heart"></i>
                                        </label>

                                    </div>
                                </div>

                                <div className="detail-box d-flex">
                                    <div className="text">
                                        <h5>  Plain White T-Shirt</h5>
                                        <p>Jhanvi’s Brand</p>
                                    </div>
                                    <div className="price">
                                        <span>  $123.00  </span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <a href="">
                                <div className="box" style={{backgroundImage: `url(${man4})`}}>
                                    <div className="new">

                                        <label htmlFor="chek5" className="like">
                                            <input type="checkbox" id="chek5" className="chek" />
                                            <i className="fa-regular fa-heart"></i>
                                        </label>

                                    </div>
                                </div>

                                <div className="detail-box d-flex">
                                    <div className="text">
                                        <h5>  Checks Shirt with white..... </h5>
                                        <p>H.M’s Brand</p>
                                    </div>
                                    <div className="price">
                                        <span>  $200  </span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <a href="">
                                <div className="box" style={{backgroundImage: `url(${woman3})` }}>
                                    <div className="new">

                                        <label htmlFor="chek6" className="like">
                                            <input type="checkbox" id="chek6" className="chek" />
                                            <i className="fa-regular fa-heart"></i>
                                        </label>

                                    </div>
                                </div>

                                <div className="detail-box d-flex">
                                    <div className="text">
                                        <h5>  Copy
                                            One piece black top & ....</h5>
                                        <p>Nike’s Brand</p>
                                    </div>
                                    <div className="price">
                                        <span>  $123.00  </span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <a href="">
                                <div className="box" style={{backgroundImage: `url(${man5})`}}>
                                    <div className="new">

                                        <label htmlFor="chek7" className="like">
                                            <input type="checkbox" id="chek7" className="chek" />
                                            <i className="fa-regular fa-heart"></i>
                                        </label>

                                    </div>
                                </div>

                                <div className="detail-box d-flex">
                                    <div className="text">
                                        <h5>  Denim Blue Shirt </h5>
                                        <p>MOMO’s Brand</p>
                                    </div>
                                    <div className="price">
                                        <span>  $38.00 </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
            </div>
        </section></>

        

     );
}
 
export default Women;