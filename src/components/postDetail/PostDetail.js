import React, { Component } from 'react';


class PostDetail extends Component {

  render() {
    return (
	  <article className="post">
        <div className="img-holder"><img src={NewsImg} alt="News Images"/></div>
        <div className="text-holder">
            <header className="post-header">
                <h2><a href="javascript:void(0)">Title of News Will Come</a></h2>
                <div className="meta">
                    <span className="post-info">Bloomberg</span>
                    <span className="post-author">John Philippe</span>
                    <span className="post-date">July 22</span>
                </div>
            </header>
            <div className="text">
                <p>News Description Will Come here News Description Will Come here 
                    News Description Will Come here News Description Will Come here 
                    News Description Will Come here </p>
            </div>
        </div>
      </article>
    );
  }
}

export default PostDetail;
