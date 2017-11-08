import React, { Component } from 'react'

class ExploreCard extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="explore-card">
          <img src={this.props.image} alt="" /> 
          <span className="item-title">{this.props.title}</span>
        </div>
      </div>
    )
  }
}

export default ExploreCard;
