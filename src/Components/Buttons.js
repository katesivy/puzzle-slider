import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
       <div  >
       <button type="button" 
               className="btn btn-primary"
               onClick={() => this.props.scrambleTiles()}
               >Shuffle</button>
               
               <div  ></div>

               <button type="button" 
               className="btn btn-primary"
               onClick={() => this.props.resetTiles()}
               >Reset</button>
      </div> 

    )
  }
}
export default Buttons;

 // let blankObject = this.state.tiles.find(i => i.location === 0);
    // blankObject.type = 'blank';
    // console.log(blankObject);
    // let blankIndex = this.findBlankObject();
    // let blankIndex = blankObject[id]
    // console.log(blankIndex); 
    // let currentClicked = id;
    // console.log({ tempLocation })
      //  console.log(tempArray[id].location)
      //  console.log(tempArray[blankIndex].location)
      //  console.log({tempArray}) 