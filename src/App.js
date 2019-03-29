import React, { Component } from 'react';
import './App.css';
import Graph from "react-graph-vis";

class App extends Component {
  render() {
    const graph = {
      nodes: [
        { id: 'EF', label: 'EF +1', title: "node 1 tootip text" },
        { id: 'MG', label: 'MG', title: "node 2 tootip text" },
        { id: 'DHL', label: 'DHL', title: "node 3 tootip text" },
        { id: 'DPD', label: 'DPD +1', title: "node 4 tootip text" },
        { id: 'DE', label: 'DE +2', title: "node 5 tootip text" },
        { id: 'HMS', label: 'HMS', title: "node 5 tootip text" }
      ],
      edges: [
        { from: 'EF', to: 'DHL' },
        { from: 'EF', to: 'DPD' },
        { from: 'MG', to: 'DPD' },
        { from: 'DHL', to: 'DE' },
        { from: 'DPD', to: 'DE' },
        { from: 'EF', to: 'HMS' },
        { from: 'HMS', to: 'DE' }
      ]
    };

    const options = {
      nodes: {
        shape: 'box'
      },
      physics: {
        hierarchicalRepulsion: {
          nodeDistance: 1 // To minimize the vertical distance between nodes
        }
      },
      layout: {
        hierarchical: {
          direction: 'LR', // Left to right
          sortMethod: 'directed' // To have it look as a directed flow
        }
      },
      interaction: {
        dragNodes: false,
        dragView: false,
        zoomView: false
      },
      edges: {
        color: "red",
        font: '12px arial #ff0000',
        smooth: {
          type: 'cubicBezier' // To make the arrows look curved, here are all the options: 
          // 'dynamic', 'continuous', 'discrete', 'diagonalCross', 'straightCross', 'horizontal', 'vertical', 'curvedCW', 'curvedCCW', 'cubicBezier'
        }
      },
      height: "500px" // height of the div containing the canvas
    };

    const events = {
      select: function (event) {
        // this will fire when node is clicked
        // var { nodes, edges } = event;
      }
    };
    return (
      <div className="App">
        <header className="App-header">
          <Graph
            graph={graph}
            options={options}
            events={events}
            getNetwork={network => {
              // this will fire when the network object created by vis.js is ready, so you can keep it as a local variable if needed
              // this.network = network;
            }}
          />
        </header>
      </div>
    );
  }
}

export default App;
