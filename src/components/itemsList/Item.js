import React, { Component } from 'react';
import NewsImg from '../../images/img1.jpg';
import EllipsisText  from 'react-ellipsis-text';


class Item extends Component {
  constructor(){
      super();
      this.state = {imgUrlHandler : true};
      this.imgErrorHandler = this.imgErrorHandler.bind(this);
  }
  imgErrorHandler(){
      this.setState({imgUrlHandler : false});
  }
  render() {
    let date = new Date(this.props.post.published_at).toDateString();
    let postSource = this.props.post.origin_url.split('/'),
        sourceName = '';
    for(var i=0; i<postSource.length; i++){
        sourceName = postSource[2].split('.');
        sourceName = sourceName[0];
    }
    
    return (
        <li>
            <div className="holder">
                <div className="img-holder">
                    <a href={this.props.post.origin_url} target="_blank">
                        {this.state.imgUrlHandler ? 
                            <img src={!this.props.post.image ? NewsImg : this.props.post.image} onError={this.imgErrorHandler} alt="News Images"/>
                            :
                            <img src={NewsImg} alt="News Images"/>    
                        }
                    </a>
                </div>
                <div className="text-holder">
                    <header className="post-header">
                        <h2><a href={this.props.post.origin_url} target="_blank">{this.props.post.title}</a></h2>
                        <div className="meta">
                            {/* <span className="post-info">{sourceName}</span> */}
                            {this.props.post.author ? <span className="post-author">{this.props.post.author}</span> : ''}
                            {this.props.post.published_at ? <span className="post-date">{date}</span> : ''}
                        </div>
                    </header>
                    <div className="text">
                        {this.props.post.summary.length > 0?
                            <p>
                                <EllipsisText text={this.props.post.summary} length={150} tail={' [...]'} />
                            </p>
                            : null
                        }
                        
                    </div>
                </div>
            </div>
        </li>
           
    );
  }
}

export default Item;
