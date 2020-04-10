import React from 'react';
import Tiles from './Tiles';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: []
    }
    this.swapValues = this.swapValues.bind(this);
  }

  async componentDidMount() {
    await this.setUpTiles();
    console.log(this.state.tiles);
  }

  setUpTiles() {
    let totalTiles = 16
    let tileArray = [];
    for (let i = 0; i < totalTiles; i++) {
      let tileObject = {
        id: i,
        location: i,
        winLocation: i,
        type: 'regular'
      }
      tileArray.push(tileObject);
    };
    this.setState({ tiles: tileArray });
  }

  swapValues(id) {
    console.log('clicked', id)
    let tempArray = this.state.tiles;
    // let blankObject = this.state.tiles.find(i => i.id === 0);
    // blankObject.className = 'blank';
    let blankIndex = this.state.tiles.findIndex(i => i.location === 0);
    let currentClicked = id;

    var clickedCol = currentClicked % 4;
    var clickedRow = parseInt(currentClicked / 4);
    var blankCol = blankIndex % 4;
    var blankRow = parseInt(blankIndex / 4);
    var switchTiles = false;

    if ((blankRow === clickedRow) && (Math.abs(clickedCol - blankCol)) === 1) {
      switchTiles = true;
    } else if
      ((blankCol === clickedCol) && (Math.abs(clickedRow - blankRow)) === 1) {
      switchTiles = true;
    } else {
      switchTiles = false;
    }

    if (switchTiles) {
      console.log('switch')
      
      let tempTile = tempArray[id].location;
      tempArray[id].location = tempArray[blankIndex].location;
      tempArray[blankIndex].location = tempTile;
     
       this.setState({ tiles: tempArray });

      }
  }


  // componentDidUpdate-->check for win after tile moves (map over current array, check if == win array)

  // scrambleTiles-->start in win position; check if tiles are eligible to swap; if so, swapValues


  render() {

    return (

      <Tiles tiles={this.state.tiles}
        swapValues={this.swapValues.bind(this)}

      />

    );
  }
}

export default Board;
