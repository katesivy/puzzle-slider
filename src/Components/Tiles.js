import React from 'react';

class Tiles extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
       <div className="row mt-lg-5 ml-lg-5 mr-lg-5" >
        {this.props.tiles.map((item, index) => {
         return (<div key={index} className="col-3 p-5 border border-dark" onClick={this.props.handleClick} id={item.id}> {item.location} </div>)
         
         }
        )}
      </div> 
    )
  }
}
export default Tiles;


// if (this.props.tiles.id === 0) {
//   <div className="dark"></div>
//   }