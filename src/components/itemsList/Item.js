import React, { Component } from 'react';


class Item extends Component {

  render() {
    return (
	  <li>
	  	<div className="img-holder">
			img will place here
		</div>
		<div className="text-holder">
			text will come here
		</div>
	  </li>
    );
  }
}

export default Item;
