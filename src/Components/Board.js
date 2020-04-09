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
    let blankType = tileArray[1].type
    blankType = 'blank';
    console.log(blankType);

    this.setState({ tiles: tileArray });

  }


  handleClick(e) {
    // console.log('clicked', e.target)
    let clickedTile = this.state.tiles[e.target.id].location;
    let clickedType = this.state.tiles[e.target.id].type;
    let blankTile = this.state.tiles[1].location;
    let blankType = this.state.tiles[1].type;
    blankType = 'blank';

    // evaluate if clickedTile is eligible to swap with blankTile
    let eligibleTile = (blankTile + 1) || (blankTile - 1)
    if (clickedTile === eligibleTile) {
      console.log('switch');

      let tempTile = clickedTile;
      clickedTile = this.state.tiles[blankTile].location;
      let newBlankTile = tempTile;

      console.log({clickedTile});
      console.log({tempTile});
      console.log({newBlankTile});
      
      let tempType = clickedType;
      clickedType = blankType;
      let newBlankType = tempType;
  
      console.log({clickedType});
      console.log({tempType});
      console.log({newBlankType});
     
      
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
