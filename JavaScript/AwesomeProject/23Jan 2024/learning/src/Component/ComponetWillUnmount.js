
import React from "react";
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true}
    }
    handleDelete = () => {
        this.setState({show:false});
    }
    render() {
        let header;
        if(this.state.show) {
            header = <Child/>
        }
      
        return(
            <>
            <div>
                <p>{header}</p>
                <button type="button" onClick={this.handleDelete}>delete</button>
            </div>
            </>
        )
    }
}

 class Child extends React.Component {
    componentWillUnmount() {
        console.log("this component header is unmounted");
    }
    render() {
        return(
            <h1>Hello Sahil!</h1>
        )
    }
}

export default Container