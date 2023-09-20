import React, { useState } from "react";

const AuthToken = () => {
    const [token, setToken]= useState()

    setToken( sessionStorage.getItem('accessetoken') );



    console.log(sessionStorage.getItem('accessetoken') );
    

    return ( 
        token
     );
}
 
export default AuthToken ;