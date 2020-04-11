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

  swapValues(id) {
    // console.log('clicked id:', id)
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
      // console.log('switch')

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

checkWin() {
    let newArray = [];
    let winArray = [];
    for (let i = 0; i < this.state.tiles.length; i++) {
      newArray.push(this.state.tiles[i].location)
      winArray.push(this.state.tiles[i].winLocation)
    }
      if (newArray.toString() === winArray.toString()) {
        console.log('win')
        alert("you won")
      }
  }

  // scrambleTiles-->start in win position; check if tiles are eligible to swap; if so, swapValues random $ of available spots: i-- (decrease each time) switch current position with type, define regular & type
  scrambleTiles() {

  }

  resetTiles() {
    this.setUpTiles();
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