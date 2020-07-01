import React from 'react';
import Tiles from './Tiles';
import Buttons from './Buttons';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: []
    }
    this.checkWin = this.checkWin.bind(this);
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
      tileArray[0].type = 'blank';
    };
    this.setState({ tiles: tileArray });
  }

  resetTiles() {
    this.setUpTiles();
  }

  swapValues(id) {
    console.log('swap')
    let tempArray = this.state.tiles;
    let blankIndex = this.state.tiles.findIndex(i => i.location === 0);
    var clickedCol = (id % 4);
    var clickedRow = (parseInt(id / 4));
    var blankCol = (blankIndex % 4);
    var blankRow = (parseInt(blankIndex / 4));
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
      let tempLocation = tempArray[id].location;
      let tempType = tempArray[id].type;
      tempArray[id].location = tempArray[blankIndex].location;
      tempArray[id].type = tempArray[blankIndex].type;
      tempArray[blankIndex].location = tempLocation;
      tempArray[blankIndex].type = tempType;

      this.setState({ tiles: tempArray });
      this.checkWin();
    }
  }
  // 1.define variables--blankTile, nextTile, move options? (R, L, D, U)
  // 2.check if tiles are eligible to swap; (nextTile)
      //*if tile.id != 3, 7, 15 (blankTile + width
  // 3.if so, swapValues random # of available spots -->?how to move?
  // i-- (decrease each time) switch current position with type, define regular & type
  scrambleTiles() {
    this.setUpTiles();
    let blankTile = this.state.tiles.findIndex(i => i.location === 0);
    var col = (blankTile % 4);
    console.log('col:', col);
    var row = (parseInt(blankTile / 4)); 
    console.log('row:', row);
    var nextTile;
    // eligible moves:
    // let tileMoveR = blankTile + 1; /*if in same col */
    // if (col != 3) {
    //   col + 1
    // } 
    //  // let tileMoveL = blankTile - 1; /*if in same col */
    // if (col != 0) {
    //   col -1
    // }
    //  // let tileMoveU = blankTile + 4; /*if in same row */
    // if (row != 3) {
    //   row + 1
    // }
    // // let tileMoveD = blankTile - 4; /*if in same row */
    // if (row != 0) {
    //   row - 1
    // }
     
    // for (let i = 0; i < this.state.tiles.length; i--) {
    //   Math.random(tileMove1-4) * 10;
     
    // }
 
   }

checkWin() {
    let newArray = [];
    let winArray = [];
    for (let i = 0; i < this.state.tiles.length; i++) {
      newArray.push(this.state.tiles[i].location)
      winArray.push(this.state.tiles[i].winLocation)
    }
      if (newArray.toString() === winArray.toString()) {
        console.log('win')
        alert("Puzzle Completed!")
      }
  }

  render() {
    return (
      <>
        <Buttons scrambleTiles={this.scrambleTiles.bind(this)}
          resetTiles={this.resetTiles.bind(this)}
        />
        <Tiles tiles={this.state.tiles}
          swapValues={this.swapValues.bind(this)}
        />


      </>
    );
  }
}

export default Board;

 // for (let j = 0; j < newArray.length; j++) {
      //   for (let k = 0; k < winArray.length; k++) {
      //     if (newArray[j] === winArray[k]) {
         // }
      // }