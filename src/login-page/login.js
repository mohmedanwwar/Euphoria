import React, { useState } from "react";
import imagelogin from "../assets/images/login.jpeg";
import twitter from "../assets/images/twitter.png";
import LoginVeritcal from "./verticalnavlogin";


const Login = ({setToken}) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    let data ;

    const fetchData = async() => {
    
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password
        })
    })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setToken(data.token)

          sessionStorage.setItem('accesseToken',data.token);

        });
    }
    console.log(data)
  
    const handleSubmit = async e => {
      e.preventDefault();
      fetchData()  
    }

    return ( 
      <div className="container">
             
    
            <LoginVeritcal />
     

        <div className="row">
                    <div className="image-login col-lg-6 col-md-6 col-sm-12" style={{backgroundImage:`url(${imagelogin})`}}>

                    </div>

            <div className="form-login col-lg-6 col-md-6 col-sm-12">
                    <h1>Sign In Page</h1>

                <form onSubmit={handleSubmit}> 
                    <div class=" google col-md-12">

                        <a class="btn btn-outline-dark" href="/users/googleauth" role="button" style={{textTransform:"none"}}>
                        <img style={{marginBottom:"3px",marginRight:"5px",width:"20px"}} 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                        Continue With Google
                        </a>
                    </div>

                    <div class=" google col-md-12">

                        <a class="btn btn-outline-dark" href="/users/googleauth" role="button" style={{textTransform:"none"}}>
                        <img style={{marginBottom:"3px",marginRight:"5px",width:"30px"}} 
                        src={twitter} />
                        Continue With Twitter
                        </a>
                    </div>

                        <div className="or"><span>OR</span></div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">User name or email address</label>
                    
                        <input type="text" onChange={e => setUserName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                    </div>

                    <div className="mb-3">

                        <label for="exampleInputPassword1" className="form-label">Password 
                        <i className="far fa-eye-slash" id="togglePassword" ><span> Hide </span> </i>   
                        </label>
                        <input type="password"  onChange={e => setPassword(e.target.value)}   className="form-control" id="exampleInputPassword1"/>
                        <a href="" className="froget">Forget your password </a>
                    </div>

                <input type="submit"  variant="contained" value={'Sign In'}  className="btn btn-primary signup"/>
                <p>Don’t have an account?<a href="" >Sign up</a>  </p>
                </form>
            </div>

         </div>
 
       </div>
          
        
     );
}

 
export default Login;