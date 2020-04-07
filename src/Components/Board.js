import React from 'react';
// import Tile from './Tile';


class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      picLocation: '',
      isEmpty: false
    }
    
  }
  
  // componentDidMount-->render board
  // componentDidUpdate-->check for win after tile moves (map over current array, check if == win array)
  // swapValues-->check if secondClick is eligible to swap with firstClick; if so, set up temp position to store firstClick's data; swap location & isEmpty;
// scrambleTiles-->start in win position; check if tiles are eligible to swap; if so, swapValues

  

  render() {
    // create array of tiles
  // map over objs to create grid

    const tile = [
      {
      id: this.state.id,
      isEmpty: false
    }
  ];
  console.log(tile);

    function Tiles() {
      for (let i = 0; i < 15; i++) {
          console.log(i);
        let tileArray = tile.push([i.length]);
        console.log(tileArray);
        return tileArray;
      };
    }

    return (

      <div className="col-2">
        < Tiles/>
      </div>
    );

  }
}

export default Board;
