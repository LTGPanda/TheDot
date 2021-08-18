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

  MaxColCounter(TheGrid) {
    let lenny = 0;
    var GridData = TheGrid.GridList;

    if(TheGrid !== ""){
      for (let index = 0; index < GridData.length; index++) {
        const item = GridData[index];
        if (lenny < item.Grid[0]){
          lenny = item.Grid[0];
        }
      }
      return lenny;
    }
    else{
      //en funktion ifall gridlist saknar eller it need?
      return 0;
    }
  }

  MaxItemCounter(TheGrid, Row) {
    let lenny = 1;
    var GridData = TheGrid.GridList;

    if(TheGrid !== ""){
      for (let index = 0; index < GridData.length; index++) {
        const item = GridData[index];

        if (item.Grid[0] === Row && lenny < item.Grid[1]) {
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

  ItemRowBuilder(Row, TheGrid){
    var GridData = TheGrid.GridList;
    var RowL = [];
    let lenny = this.MaxItemCounter(TheGrid, Row);
    let dia = 50;

    console.log(Row);

    if (GridData !== ""){
      for (let index = 0; index < lenny; index++) {
        RowL.push(<Hexagon style={{stroke: 'orange'}} diagonal={dia}/>);
      }
    }
    return RowL;
  }

  RowBuilder(Items){
    return (
      <Grid container direction="row" className="row">
        {this.ItemRowBuilder(Items, this.state.apiResponse)}
      </Grid>
    );
  }

  ColBuilder(Row){
    var row = [];
    for (let index = 0; index < Row; index++) {
      row.push(this.RowBuilder(index));
    }

    return row;
  }

  render() {
    let lenny = this.MaxColCounter(this.state.apiResponse);

    return (
    <Grid container justifyContent="center" alignItems="center" direction="column">
      {this.ColBuilder(lenny)}
    </Grid>
    );
  }
}

export default App;
