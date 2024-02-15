import React, { useState } from "react";
import link from "react-router-dom"
const Nav = ()=> {
    const [click, setClick] = useState(0);
    function youclick() {
        setClick("hi you clicked")
    }
return(
    <div className="Nav-bar-Main">
        <ul >
             <li link>home</li>
            <li>About</li>
            <li>Services</li>
            <li className="ser">Search</li>
        </ul>
    </div>
    )
}

export default Nav;