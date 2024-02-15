import React from "react";
class Value extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("changes occur");
        console.log("prev State", prevState);
        console.log("current State", this.state);
    }
     
    incrementCount = ()=> {
        this.setState({count: this.state.count +1});
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


export default Value