import React from "react";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={color: 'lightGreen',

  }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({color: 'blue'})
    }, 1000);
  }

  componentWillUnmount() {
    setTimeout(() => {
      this.setState({color:'red'})
    },2000)
  }
  render() {
    return (
      <>
       <p style={{color:this.state.color,   backgroundColor: 'rgba(0,0,0,0.88)', }}>Hello here is sahil</p>

       <ComponentPratice/>
      </>
     
    )
  }
}

export default App;