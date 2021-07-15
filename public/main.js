import React from 'react';
import ReactDOM from 'react-dom';
import Hexagon from 'react-hexagon';

ReactDOM.render(
    <React.StrictMode>
      <div className="row">
        <Hexagon style={{stroke: '#b0b0b0', strokeDasharray: '13'}}>
          <text>test lol xD</text>
        </Hexagon>
        <Hexagon style={{stroke: '#b0b0b0', strokeDasharray: '13'}}></Hexagon>
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );