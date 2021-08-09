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
    //behöver jag fylla dem med hexagoner nu?
  }

  CollBuilder(rows){
    //gör en coll sedan fyll den med så många rows som det behövs
  }

  GridBuilder(colls, rows){
    //kalla på coll builder i en loop
  }

  MaxCollCounter(TheGrid) {
    let lenny = 1;
    var GridData = TheGrid.GridList;

    if(TheGrid !== ""){
      for (let index = 0; index < GridData.length; index++) {
        const item = GridData[index];
        if (lenny < item.Grid[1]){
          lenny = item.Grid[1];
        }
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

    for (let index = 0; index < lenny; index++) {//whot nu?
      Colls.push(this.RowBuilder());
    }


    return Colls;
  }
}

export default App;
