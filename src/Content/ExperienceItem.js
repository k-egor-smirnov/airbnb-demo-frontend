import React, { Component } from 'react'
import styled from 'styled-components'

class ExperienceItem extends Component {
  render() {
    return (
      <div className="item col-3">
        <img src={this.props.image} alt="" /> 
        <span className="item-cost">{this.props.cost}</span>
        <span className="item-title">{this.props.title}</span>
      </div>
    )
  }
}

export default ExperienceItem;
