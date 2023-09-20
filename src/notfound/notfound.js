import React from "react";
import notfound from "../assets/images/notfound.png";
import { Link } from "react-router-dom";
const Notfound = () => {
    return (
        <div className="container">
            <div className="section-notfound">
                <img src={notfound}/>
                <h1>Oops! Page not found</h1>
                <p>The page you are looking for might have been removed or<br /> temporarily unavailable.</p>
                <Link to="/"><button  type="button">Back to HomePage</button> </Link> 
            </div>

        </div>
      );
}
 
export default Notfound;