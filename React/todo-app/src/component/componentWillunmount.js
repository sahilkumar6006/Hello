import React from "react";

class ComponentPratice extends React.Component {
    constructor(props){
        super(props);
        this.state= {count: 0}
      
    }

   
  componentDidUpdate( prevProps,prevState) {
    if(prevState.count !== this.state.count) {
        console.log('count has been updated', this.state.count)
    }
  
  }

  handleClick() {
    console.log("i am caaled");
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
    render() {
        return(
            <div>
            <h3 >Username: Rahul</h3>
            <button onClick={() => this.handleClick()}>Increment</button>
            <div >{this.state.count}</div>
          
         </div>
        )
    }
}

export default ComponentPratice