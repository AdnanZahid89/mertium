import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item.js';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } from '../../helpers/feedHelpers';
 
function fetchPostsWithRedux() {
	return (dispatch) => {
  	dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
    	if(response.status === 200){
      	dispatch(fetchPostsSuccess(json))
      }
      else{
      	dispatch(fetchPostsError())
      }
    })
  }
}

function fetchPosts() {
  const URL = "http://ec2-34-224-85-19.compute-1.amazonaws.com:8000/get_feeds/";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

class ItemHolder extends Component {

  componentDidMount() {
  	this.props.fetchPostsWithRedux();
  }
  
  render() {
    return (
	  <div className="container-fluid">
	  	<header className="page-header text-center">
        <h1>Mertium</h1>
      </header>
      <ul className="list-inline feed-list">
          {
            this.props.posts && 
            this.props.posts.map((post, index) =>{
              return(
                
                <Item post={post} key={index} />
              )
            })
          }
      </ul>
	  </div>
    );
  }
}

function mapStateToProps(state){
	return {
  	posts: state.posts
  }
}

// export default ItemHolder;


export default connect(mapStateToProps, {fetchPostsWithRedux})(ItemHolder);