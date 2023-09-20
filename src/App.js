
import './App.css';
import React, {useState} from 'react';
import Login from './login-page/login';
import AuthToken from './token';
import Root from './root';


 function App() {
  const [token, setToken] = useState()

  const userToken = sessionStorage.getItem('accesseToken')
  
  if(!userToken){
    return <Login setToken={setToken}/>

  } else{ 
    return <Root/>
  }
    
  
  
 
  
}

export default App;

 
