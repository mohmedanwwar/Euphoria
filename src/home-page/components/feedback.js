import React from "react";
import woman2 from "../../assets/images/woman2.jpeg" ;
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

const Feedback = () => {

    return ( 
        <div className="section feedback">
        <h2 className="section_title">
          Feedback
        </h2>
       

        <OwlCarousel className='owl-theme' {...options}  loop margin={10} nav>
        <div className="itme">
            <div className="profile">
               <div className="profile-image">
            <img src={woman2}></img>
             <p>Floyd Miles</p>
               </div>
               <div className="profile-icon">
           <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
              </div>
            </div>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
         </div>

         <div className="itme">
            <div className="profile">
               <div className="profile-image">
            <img src={woman2}></img>
             <p>Floyd Miles</p>
               </div>
               <div className="profile-icon">
           <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
              </div>
            </div>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
         </div>

         <div className="itme">
            <div className="profile">
               <div className="profile-image">
            <img src={woman2}></img>
             <p>Floyd Miles</p>
               </div>
               <div className="profile-icon">
           <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
              </div>
            </div>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
               Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>

          <div className="itme">
            <div className="profile">
               <div className="profile-image">
            <img src={woman2}></img>
             <p>Floyd Miles</p>
               </div>
               <div className="profile-icon">
           <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
              </div>
            </div>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
               Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>

           <div className="itme">
            <div className="profile">
               <div className="profile-image">
            <img src={woman2}></img>
             <p>Floyd Miles</p>
               </div>
               <div className="profile-icon">
           <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
             <i className="fa-solid fa-star" style={{color: "#EDD146"}}></i>
              </div>
            </div>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
               Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
            
           </OwlCarousel>

     </div>
     );
}
 
export default Feedback;