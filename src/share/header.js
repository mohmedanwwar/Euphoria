import React, { Fragment, useEffect, useState } from 'react';
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import data from "../Birthday/data";
import BirthdayList from '../Birthday/BirthdayList';

const Header = () => {


  const [people, setPeople] = useState(data)


  let objectDate = new Date();
  let day = objectDate.getDate();
  let month = objectDate.getMonth();
  let monthbirth = month + 1
  let year = objectDate.getFullYear();

    const birthDay = people.filter((person)=>person.mounth === monthbirth && person.day === day  )
    console.log(birthDay) 
    console.log(birthDay.length)
    const lenght = birthDay.length

    const clearAllRecords =()=> {
      setPeople([])
    }
    



    return (
    
    
        <div className="container">
         <nav className="navbar navbar-expand-lg  ">
   
      <Link className="navbar-brand " to="">
        <img src={logo} width="75px" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
       data-bs-target="#navbarText" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav m-auto  mb-lg-0 ">

            <li className="nav-item">
                <Link className="nav-link active" to="">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Men </Link>
              </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/ProductListWomen">Women</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Combos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Joggers </Link>
          </li>   
         </ul>

         <div className="Search ">
          <i className="fa-solid fa-magnifying-glass "></i>
          <input className="bnt" placeholder=" Search" /> 
        </div>
         
        <div className="d-flex ">
          <div className="icon"> <Link to="#"><i className="fa-regular fa-heart" ></i> </Link></div>
          <div className="icon active"> <Link to="/Profile"><i className="fa-regular fa-user" ></i></Link> </div>
          <div className="icon"> <Link to="/Addcart"><i className="fa-solid fa-cart-shopping" ></i></Link></div>
          <div className="icon">
                  <button type="button" className='btn btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i className="fa-solid fa-cake-candles">
                        {(birthDay.length === 0)?(<Fragment></Fragment>):(
                          <span className="position-absolute top-25 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                    <div className='lenght'> {lenght}</div> 
                                  </span>  
                          )} 
                        
                        </i>
                  </button>
                 
                       <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                       <div className="modal-dialog">
                         <div className="modal-content">
                           <div className="modal-header">
                             <h1 className="modal-title fs-5" id="exampleModalLabel"> 
                               {(birthDay.length === 0) ? (<Fragment></Fragment>):(<Fragment>
                                Happy Birthday to:{birthDay.map((person)=>{return(<div className='name'><strong>{person.name} 🎉 </strong></div>)})}
                               </Fragment>)}</h1>
     
                           </div>

                               {(birthDay.length === 0)?(<Fragment> <h2>No Data Available </h2> </Fragment>):( 
                                  <div className="modal-body">
                                    <BirthdayList />
                                </div>
                                  )}
                            
                           <div className="modal-footer">
                                {(birthDay.length === 0)?
                                ( <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>):(
                                <button  type="button"  className='btn btn-danger' data-bs-dismiss="modal"   onClick={clearAllRecords}>Clear All</button>) } 
                             {/* <button type="button" className="btn btn-primary">Save changes</button> */}
     
                           </div>
                         </div>
                       </div>
                     </div>
                  
             
                
            </div>
         </div>

      </div>
      
     
       </nav>
       
          </div>
           
   
      );
}
 
export default Header;