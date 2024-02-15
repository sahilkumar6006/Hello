import React from "react";
class Counter extends React.Component {
    constructor(){
        super();
        this.state ={
            data: null,
        };
    }

        componentDidMount(){
            setTimeout(() => {
                const fetchedData = "this is the fetched Data";
                this.setState({data: fetchedData });
            }, 2000)

        }
   render() {
    return(
        <div>
             <div>Example</div>
        {this.state.data? (<p> Data: {this.state.data}</p>): (<p>Loading...</p>)}
        </div>
       
    ) 
       
    }
   
}

export default Counter