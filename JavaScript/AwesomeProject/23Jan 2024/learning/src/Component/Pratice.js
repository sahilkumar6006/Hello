import React, { useState } from "react";


function Pratice() {
    const[username, setUserName] = useState('username' , 'guest');
   const handleInputChange  =(e)=> {
    setUserName(e.target.value);

   }
    return(
        <div>
            <h1>Hello, {username} !</h1>
            <input type="text" placeholder="enter your name" value= {username} onChange={handleInputChange}></input>
        </div>
    )
}
export default  Pratice;