 import React from "react";
 import rectangle1 from "../../assets/images/Rectangle 28 (1).png";
 import rectangle2 from "../../assets/images/Rectangle 28 (2).png";
 import photograp from "../../assets/images/photograp.png";
 import rectangle from "../../assets/images/Rectangle 28.png";
 import OwlCarousel from 'react-owl-carousel';
 import 'owl.carousel/dist/assets/owl.carousel.css';
 import 'owl.carousel/dist/assets/owl.theme.default.css';
 
 const options = {
  dots: true,
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      600: {
          items: 1,
      },
     
      1000: {
          items: 3,

      }
  },
};


 const Newarrival = () => {
  
    return (  
        <div className="section newarrival-secation ">
        <h2 className="section_title">
          New Arrival
        </h2>
         
         <div className="row">
         <OwlCarousel className='owl-theme'   {...options} loop margin={10} nav>
          
               <div className="image">

              <img src={photograp} className="hide" ></img>
              <h1>
              Knitted Joggers
              </h1>
              </div>

              <div className="image">
              <img src={rectangle} className="prev" ></img>
              <h1>
              Full Sleeve
              </h1>
            </div>

            <div className="image">
              <img src={rectangle1} className="act" ></img>
              <h1>
              Active T-Shirts
              </h1>
            </div>

            <div className="image">
              <img src={rectangle2} className="next" ></img>
              <h1>
              Urban Shirts
              </h1>
            </div>

                    
         </OwlCarousel>
         </div>
       </div>
    );
 }
  
 export default Newarrival;