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
