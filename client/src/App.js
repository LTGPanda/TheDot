import React, { Component } from 'react';
import './App.css';
import Hexagon from 'react-hexagon';
import Grid from '@material-ui/core/Grid';

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
    return <Grid container direction="row" className="row"></Grid>
    //behöver jag fylla dem med hexagoner nu?
  }

  CollBuilder(rows){
    //gör en coll sedan fyll den med så många rows som det behövs
    var Coll = [];

    for (let index = 0; index < rows; index++) {
      Coll.push(this.RowBuilder());      
    }
    return Coll;
  }

  GridBuilder(colls, rows){
    //kalla på coll builder i en loop och får den i the coll ffs
    var Grid = [];
    for (let index = 0; index < colls; index++) {
      Grid.push(this.CollBuilder(rows));
    }

    return Grid;
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
