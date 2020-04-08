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
        winLocation: '',
        type: 'regular'
      }
      tileArray.push(tileObject);

    };
    tileArray[0].type = 'blank';
    this.setState({ tiles: tileArray });
    console.log(tileArray[0].type);
  }


  handleClick(e) {
    console.log('clicked', e.target)
    let currentClick = this.state.tiles[e.target.id].location;
    console.log(currentClick);
    const blankTile = this.state.tiles[0].location;
    console.log(blankTile);
    // evaluate if currentClick is eligible to swap with blankTile
    let eligibleTile = (blankTile + 1) || (blankTile - 1)
    if (currentClick === eligibleTile) {
      console.log('switch');
      this.swapValues()
    }
  }
  // swapValues-->check if secondClick is eligible to swap with firstClick; if so, set up temp position to store firstClick's data; swap location & isEmpty;


  swapValues(handleClick) {
    // take info and change it
    console.log(this.state.tiles[this.currentClick]);
    // let nextTile = this.state.tiles[?];
    // console.log(nextTile);
  }
  // 

  // componentDidUpdate-->check for win after tile moves (map over current array, check if == win array)

  // scrambleTiles-->start in win position; check if tiles are eligible to swap; if so, swapValues

  //  console.log({this.state.tiles});

  render() {

    return (

      <Tiles tiles={this.state.tiles}
        handleClick={this.handleClick.bind(this)}

      />

    );
  }
}

export default Board;
