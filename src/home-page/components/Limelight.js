import React from "react";
import rectangle3 from "../../assets/images/women.jpeg";
import pattern from "../../assets/images/Pattern.png";
import shorts from "../../assets/images/Shorts.png";
import woman2 from "../../assets/images/woman2.jpeg" ;



 const Limelight = () => {
    return (

        <div className="section section-Limelight">
        <h2 className="section_title">
          In The Limelight
       </h2>
       
        <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3">
          <a href="">
              <div className="box" style={{backgroundImage:`url(${rectangle3})`}}>
                  <div className="new">

                      <label htmlFor="chek" className="like">
                          <input type="checkbox" id="chek" className="chek" />
                          <i className="fa-regular fa-heart"></i>
                      </label>
                  </div>
              </div>

              <div className="detail-box d-flex">
                  <div className="text">
                      <h5> Black Sweatshirt with .... </h5>
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
              <div className="box" style={{backgroundImage: `url(${pattern})` }}>
                  <div className="new">

                      <label htmlFor="chek1" className="like">
                          <input type="checkbox" id="chek1" className="chek" />
                          <i className="fa-regular fa-heart"></i>
                      </label>
                  </div>
              </div>

              <div className="detail-box d-flex">
                  <div className="text">
                      <h5> line Pattern Black H...</h5>
                      <p>AS’s Brand</p>
                  </div>
                  <div className="price">
                      <span>  $37.00  </span>
                  </div>
              </div>
          </a>
      </div>

      <div className="col-sm-6 col-md-4 col-lg-3">
          <a href="">
              <div className="box" style={{backgroundImage: `url(${shorts})`}}>
                  <div className="new">

                      <label htmlFor="chek2" className="like">
                          <input type="checkbox" id="chek2" className="chek" />
                          <i className="fa-regular fa-heart"></i>
                      </label>

                  </div>
              </div>

              <div className="detail-box d-flex">
                  <div className="text">
                      <h5>  Black Shorts </h5>
                      <p>Black Shorts </p>
                  </div>
                  <div className="price">
                      <span>  $37.00  </span>
                  </div>
              </div>
          </a>
      </div>

      <div className="col-sm-6 col-md-4 col-lg-3">
          <a href="">
              <div className="box" style={{backgroundImage:`url(${woman2})` }}>
                  <div className="new">
                      <label htmlFor="chek3" className="like">
                          <input type="checkbox" id="chek3" className="chek" />
                          <i className="fa-regular fa-heart"></i>
                      </label>

                  </div>
              </div>

              <div className="detail-box d-flex">
                  <div className="text">
                      <h5> Levender Hoodie with ....</h5>
                      <p>Nike’s Brand</p>
                  </div>
                  <div className="price">
                      <span>  $119.00 </span>
                  </div>
              </div>
          </a>
      </div>
       </div>
      </div>
      );
 }
  
 export default Limelight;