import React from 'react';
import Tiles from './Tiles';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     tiles: []
    }

  }
 
  async componentDidMount() {
    await this.setUpTiles();
    console.log(this.state.tileObject);
  }
  
  setUpTiles() {
    let tileArray = [];
    for (let i = 0; i < 16; i++) {
     let tileObject = {
          id: i
     }
      tileArray.push(tileObject);
    };
     this.setState({ tiles: tileArray });
  }
    

  // componentDidUpdate-->check for win after tile moves (map over current array, check if == win array)
  // swapValues-->check if secondClick is eligible to swap with firstClick; if so, set up temp position to store firstClick's data; swap location & isEmpty;
  // scrambleTiles-->start in win position; check if tiles are eligible to swap; if so, swapValues

  //  console.log({this.state.tiles});

  render() {


    return (
     
         
         <Tiles
            tiles={this.state.tiles}
         / >
            
            
       
         
        
     
     
    );
  }
}

export default Board;
