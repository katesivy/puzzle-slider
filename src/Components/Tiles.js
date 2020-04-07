import React from 'react';

class Tiles extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.tiles, 'here');
    return (
       <div className="row" >
        {this.props.tiles.map((item, index) => {
         return ( <div key={index} className="col-3 border border-dark"> {item.id}</div>)
         }
        )}
      </div> 
    )

  }
}
export default Tiles;
