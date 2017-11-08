import React, { Component } from 'react'
import styled from 'styled-components'

const ExploreImage = styled.img`
  height: inherit;
`

class ExploreItem extends Component {
  render() {
    return (
      <div className="item col-4">
        <img
          src={this.props.image} alt=""
        /> 
        <span className="item-title">{this.props.title}</span>
      </div>
    )
  }
}

export default ExploreItem;
