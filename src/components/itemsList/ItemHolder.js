import React, { Component } from 'react';
import Item from './Item.js';


class ItemHolder extends Component {

  render() {
    return (
	  <div className="container-fluid">
	  	<header className="page-header text-center">
			<h1>Mertium</h1>
		</header>
		
			<Item/>
	  </div>
    );
  }
}

export default ItemHolder;
