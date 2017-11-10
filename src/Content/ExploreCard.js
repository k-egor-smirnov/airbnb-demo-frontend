import React, { Component } from 'react'
import styled from 'styled-components'
import media from '../media'

const Explore = styled.div`
  display: flex;
  padding: 0px;
  max-width: auto;
  margin-right: 16px;
  padding-right: 24px;

  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;

  ${media.phone`
    flex-flow: column nowrap;
    width: 144px;
  `}
`

const Title = styled.div`
  margin: auto;
  font-weight: bold;
  align-self: center;
  padding-left: 24px;
  margin-right: 24px;

  ${media.phone`

  `}  
`

class ExploreCard extends Component {
  render() {
    return (
      <div className="scrolling-card">
          <Explore>
            <img src={this.props.image} alt="" /> 
            <Title>{this.props.title}</Title>
          </Explore>
      </div>
    )
  }
}

export default ExploreCard;
