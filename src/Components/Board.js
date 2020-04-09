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
    // let blankObject = this.state.tiles.find(item, index);
    //   if (item === index[0]) {
    // console.log(item);
    //   }
    let currentClicked = this.state.tiles[id].location;
    let clickedType = this.state.tiles[id].type;
    let blankLocation = this.state.tiles[0].location;
    let blankType = this.state.tiles[0].type;
    blankType = 'blank';
    var clickedCol = currentClicked % 4;
    var clickedRow = parseInt(currentClicked / 4);
    var blankCol = blankLocation % 4;
    var blankRow = parseInt(blankLocation / 4);
    var switchTiles = false;

    // // evaluate if currentClicked is eligible to swap with blankLocation
    if ((blankRow === clickedRow) && (Math.abs(clickedCol - blankCol) === 1)) {
      switchTiles = true;
    } else if
      ((blankCol === clickedCol) && (Math.abs(clickedCol - blankCol) === 1)) {
      switchTiles = true;
    }
    if (switchTiles) {
      console.log('switch')

      let tempTile = currentClicked;
      currentClicked = this.state.tiles[0].location;
      let newBlankLocation = tempTile;
      let tempType = clickedType;
      clickedType = blankType;
      let newBlankType = tempType;

      let tempArray = this.state.tiles;
      tempArray[id].location = currentClicked;
      tempArray[blankLocation] = newBlankLocation;
      tempArray[id].type = clickedType;
      tempArray[blankType] = newBlankType;

      this.setState({ tiles: tempArray });

      console.log({ currentClicked });
      console.log({ tempTile });
      console.log({ newBlankLocation })
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
