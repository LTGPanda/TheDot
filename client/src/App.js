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
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }

  RowBuilder(){
    return <h1>owo</h1>;
    //return <Grid container direction="row" className="row"></Grid>
  }

  MaxCollCounter(TheGrid) {
    let lenny = 1;
    console.log(TheGrid);//måste converta json till iterateble array

    //var TheList = this.state.apiResponse.GridList;

    /*for (let index = 0; index < TheGrid.length; index++) {
      /*const item = TheGrid[index];
      if (lenny > item.Grid[1]){
        lenny = item.Grid[1];
      }
      console.log("wow");
    }*/
    return lenny;
  }

  render() {
    //console.log(this.state.apiResponse.GridList);
    var Colls = [];
    let lenny = this.MaxCollCounter(this.state.apiResponse.GridList);

    for (let index = 0; index < lenny; index++) {
      Colls.push(this.RowBuilder());
    }


    return Colls;
  }
}

export default App;
