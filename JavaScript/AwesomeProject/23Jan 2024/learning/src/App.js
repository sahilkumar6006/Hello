import React, { useContext, useEffect, useState } from "react";
import Nav from "./Component/Nav-bar";
import Pratice from "./Component/Pratice";
import Counter from "./Component/ComponentDidMount";
import Value from "./ComponentDidUpdate";
import Another from "./Component/ComponentShouldUpdate";
import Container from "./Component/ComponetWillUnmount";

const MyContext = React.createContext('hello');


const Example =() => {
  const [count ,setCount] = useState(0);
  const value = useContext(MyContext)
  

useEffect(() => {
  document.title = `You  clicked ${count} times`;
})
  return(
    <>
<Nav/>
<Pratice/>
<Counter/>
<Value/>
<Another/>
<Container/>
{/* <Pratice2/> */}
<div>
      <p>Value of the Count is {count}</p>
      <p>this is the context {value}</p>
      <button onClick={() => setCount(count +1)}>Increment</button>

      <button onClick={() => setCount(count -1)}>Decrement</button>
    </div>
    </>
    
   

  )}

export default Example;