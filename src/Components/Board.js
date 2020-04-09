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
    // let blankType = tileArray[0].type
    // blankType = 'blank';
    // console.log(blankType);

    this.setState({ tiles: tileArray });

  }


  handleClick(e) {
    // console.log('clicked', e.target)
    let clickedTile = this.state.tiles[e.target.id].location;
    // let clickedType = this.state.tiles[e.target.id].type;
    // let blankType = 'blank';
    let blankTile = this.state.tiles[1].location;
    // console.log(clickedTile);
    // console.log(clickedType);
    // console.log(newType);
    // console.log(blankTile);

    // evaluate if clickedTile is eligible to swap with blankTile
    let eligibleTile = (blankTile + 1) || (blankTile - 1)
    if (clickedTile === eligibleTile) {
      console.log('switch');
      let tempTile = this.state.tiles[clickedTile].location;
      // let tempType = this.state.tiles[clickedTile].type;
      let newTile = this.state.tiles[blankTile].location;
      // let oldBlankType = this.state.tiles[blankTile].type;
      clickedTile = blankTile;
      blankTile = tempTile;
      // clickedType = blankType;

      // console.log(tempType);
      console.log({tempTile});
      console.log({newTile});
      // console.log(oldBlankType);
      // console.log(clickedType);
      
    }
  }



  // this.swapValues()
  swapValues(handleClick) {
    // take info and change it
    // console.log(this.state.tiles[this.props]);

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
