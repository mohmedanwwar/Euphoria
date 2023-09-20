 import React, { useEffect } from "react";
 import Newarrival from "./components/newarrival";
 import Man from "./components/man";
 import Women from "./components/women";
import Carousel from "./components/carousel";
import Bigsaving from "./components/bigsaving";
import Made from "./components/made";
import Prand from "./components/prand";
import Limelight from "./components/Limelight";
import Feedback from "./components/feedback";
import Items from "./components/items";


const Home = props => {
  
    return (  
      <div className="home-secation">
                      <Carousel />  
         <div className="container">

                       <Items />
                       <Newarrival />
                       <Bigsaving />
                       <Made />
                        <Man />
                        <Women />
                         <Prand />
                         <Limelight />
                       <Feedback />


          </div>
             
      </div>
         

       
    );
}
 
export default Home;


