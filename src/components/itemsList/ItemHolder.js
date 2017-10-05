import React, { Component } from 'react';
import Item from './Item.js';


class ItemHolder extends Component {

  componentDidMount() {
    //this.props.getItems();

    console.log('this.props.getItems ', this.props);
  }

  render() {
    return (
	  <div className="container-fluid">
	  	<header className="page-header text-center">
			<h1>Mertium</h1>
		</header>
      
	  </div>
    );
  }
}

export default ItemHolder;
