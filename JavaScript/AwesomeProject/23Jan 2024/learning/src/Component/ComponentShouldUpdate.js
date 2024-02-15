import React from "react";
class Another extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    shouldComponentUpdate(prevProps, nextState) {
       if(nextState.count % 2 == 0) {
        return true;
       }
       return false;
    }
     
    incrementCount = ()=> {
        this.setState((prevState) => ({count: prevState.count+1}));
    }

    render () {
        return (
            <div>
                       <div>Hello</div>
        <p>{this.state.count}</p>
         <button onClick={this.incrementCount}>Click</button>

            </div>
  

        )
    }
}


export default Another