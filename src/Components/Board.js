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
  findEligibleTile() {
    //  finding the current position (row/col) of clicked & blank:
    // let N = this.clickedLocation
    // var clickedCol = N % 4
    // var clickedRow = parseInt(N/4)
    // let blankN = this.state.tiles[1].location
    // var blankCol = blankN % 4
    // var blankRow = parseInt(blankN/4)
    // if row of blank tile === clicked tile && col diff +/- 1
    // if col of blank tile === clicked tile && row diff +/- 1
  }

  swapValues(id) {
    console.log('clicked', id)
    let clickedLocation = this.state.tiles[id].location;
    let clickedType = this.state.tiles[id].type;
    let blankLocation = this.state.tiles[0].location;
    let blankType = this.state.tiles[0].type;
    blankType = 'blank';

    // // evaluate if clickedLocation is eligible to swap with blankLocation
    let eligibleTile = (blankLocation + 2)
    if (clickedLocation === eligibleTile) {
      console.log('switch');

      let tempTile = clickedLocation;
      clickedLocation = this.state.tiles[0].location;
      let newBlankLocation = tempTile;

      let tempArray = this.state.tiles;
      tempArray[id].location = clickedLocation;
      tempArray[blankLocation] = newBlankLocation;
      
      console.log({ clickedLocation });
      console.log({ tempTile });
      console.log({ newBlankLocation });

      let tempType = clickedType;
      clickedType = blankType;
      let newBlankType = tempType;

      tempArray[id].type = clickedType;
      tempArray[blankType] = newBlankType;
      this.setState({ tiles: tempArray });

      console.log({ clickedType });
      console.log({ tempType });
      console.log({ newBlankType });

    }
  }


  // componentDidUpdate-->check for win after tile moves (map over current array, check if == win array)

  // scrambleTiles-->start in win position; check if tiles are eligible to swap; if so, swapValues

  //  console.log({this.state.tiles});

  render() {

    return (

      <Tiles tiles={this.state.tiles}
        swapValues={this.swapValues.bind(this)}

      />

    );
  }
}

export default Board;
