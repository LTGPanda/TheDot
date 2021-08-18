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

  MaxRowCounter(TheGrid) {
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

  RowBuilder(){
    let dia = 50;

    return (
      <Grid container direction="row" className="row">
        <Hexagon style={{stroke: 'orange'}} diagonal={dia}/>
        <Hexagon style={{stroke: 'orange'}} diagonal={dia}/>
        <Hexagon style={{stroke: 'orange'}} diagonal={dia}/>
      </Grid>
    );
  }

  ColBuilder(Row){
    var row = [];
    for (let index = 0; index < Row; index++) {
      row.push(this.RowBuilder());
    }

    return row;
  }

  render() {
    let lenny = this.MaxRowCounter(this.state.apiResponse);

    return (
    <Grid container justifyContent="center" alignItems="center" direction="column">
      {this.ColBuilder(lenny)}
    </Grid>
    );
  }
}

export default App;
