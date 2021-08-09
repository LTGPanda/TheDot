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
    var GridData = TheGrid.GridList;
    console.log(TheGrid.GridList);

    if(TheGrid !== ""){
      console.log("fuk");
      for (let index = 0; index < GridData.length; index++) {
        const item = GridData[index];
        if (lenny > item.Grid[1]){
          lenny = item.Grid[1];
        }
        console.log("wow");
      }
      return lenny;
    }
    else{
      //en funktion ifall gridlist saknar eller it need?
      return 0;
    }
  }

  render() {
    var Colls = [];
    let lenny = this.MaxCollCounter(this.state.apiResponse);

    for (let index = 0; index < lenny; index++) {
      Colls.push(this.RowBuilder()); //it not do the do
    }


    return Colls;
  }
}

export default App;
