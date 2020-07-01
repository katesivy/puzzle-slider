import React from 'react';

class Tiles extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className="container bg-light p-3">
       <div className="row mt-lg-5 ml-lg-5 mr-lg-5 border border-secondary " >
        {this.props.tiles.map((item, index) => {
         let classString = "col-3 p-5 border border-secondary " + item.type;
         return (<div 
         key={index} 
         className={classString} 
         onClick={() => {this.props.swapValues(item.id)}} 
         id={item.id}
         > {item.location} </div>)
         
         }
        )}
      </div>
      </div> 
    )
  }
}
export default Tiles;

// <>
//       <div className="App">
//       <div className="row text-content-center" >
//       <div className="col-6 offset-6 " >
//         <header>Puzzle Slider</header>
//         </div>
//         </div>
//         <div className="row" >
//           <div className="col-3 offset-3" >
//             <button type="button"
//               className="btn btn-primary"
//               onClick={() => this.props.scrambleTiles()}
//             >Shuffle</button>
//           </div>
//            <div className="col-3 offset-3" >
//             <button type="button"
//               className="btn btn-primary"
//               onClick={() => this.props.resetTiles()}
//             >Reset</button>
//                </div>
//         </div>
//         <Board />
//       </div>
//     </>
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