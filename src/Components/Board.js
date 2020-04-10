import React from 'react';
import Tiles from './Tiles';
import Buttons from './Buttons';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: []
    }
    // this.findBlankObject = this.findBlankObject.bind(this);
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

  // findBlankObject(id, tiles) {
  //       let blankObject = 0;
  //       for (let i = 0; i < tiles.length; i++) {
  //           if (tiles[i].location === id) {
  //               blankObject = i;
  //               break;
  //           }
  //       }
  //       return blankObject;
  //   } 

  swapValues(id) {

    console.log('clicked', id)
    let tempArray = this.state.tiles;
    // let blankObject = this.state.tiles.find(i => i.location === 0);
    //    blankObject.type = 'blank';
    //      console.log(blankObject);
    let blankIndex = this.state.tiles.findIndex(i => i.location === 0);
    //  let blankIndex = this.findBlankObject();
    // let blankIndex = blankObject[id]
    // console.log(blankIndex); 
    // let currentClicked = id;

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
      console.log('switch')
      let tempLocation = tempArray[id].location;
      // console.log({ tempLocation })
      let tempType = tempArray[id].type;
      tempArray[id].location = tempArray[blankIndex].location;
      tempArray[id].type = tempArray[blankIndex].type;
      //  console.log(tempArray[id].location)
      tempArray[blankIndex].location = tempLocation;
      tempArray[blankIndex].type = tempType;
      //  console.log(tempArray[blankIndex].location)
      //  console.log({tempArray})  

      this.setState({ tiles: tempArray });

    }
    console.log(this.state.tiles)
  }

  // -->check for win after tile moves (map over current array, check if == win array)
  // componentDidUpdate() {
  // for (i = 0; i < this.state.tiles.length; i++) {
  //   if (this.state.tiles.winPosition === this.state.tiles.i) {
  //       alert("you won")
  //   }
  // }
  // }

  // scrambleTiles-->start in win position; check if tiles are eligible to swap; if so, swapValues random $ of available spots: i-- (decrease each time) switch current position with type, define regular & type
  scrambleTiles() {


  }
 
  resetTiles() {
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
