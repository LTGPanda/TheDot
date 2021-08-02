import React, { Component } from 'react';
import './App.css';
//import Hexagon from 'react-hexagon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }

  callAPI(){
    fetch("http://localhost:9000/ServerIndex")
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res}));
      //console.log(fetch("http://localhost:9000/ServerIndex"));
  }

  componentWillMount(){
    this.callAPI();
  }

  render() {
    console.log(this.state.apiResponse.test);
    if (this.state.apiResponse.test) {
      return (
        <div className="App">
            <h1>woowzers tu</h1>
        </div>
      );  
    }
    else if (!this.state.apiResponse.test){
      return (
        <div className="App">
            <h1>nah famsquad</h1>
        </div>
      );
    }
    else{
      return(
        <div className="App">
            <h1>frigg</h1>
        </div>
      );
    }
  }
}

export default App;
