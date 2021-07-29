import React, { Component } from 'react';
import './App.css';
import Hexagon from 'react-hexagon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }

  callAPI(){
    fetch("http://localhost:9000/ServerIndex")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
          {this.state.apiResponse}
      </div>
    );
  }
}

export default App;