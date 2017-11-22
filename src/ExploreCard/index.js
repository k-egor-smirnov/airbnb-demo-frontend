import React, { Component } from 'react'
import styled from 'styled-components'

const Explore = styled.div`
  display: flex;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08); 
  box-sizing: border-box;
  margin-bottom: 16px;
  flex-flow: column nowrap;
  color: #383838;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
    align-items: center;
  }
`

const Title = styled.span`
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 12px;
  font-weight: bold;
  font-size: 12px;

  @media(min-width: 768px) {
    font-size: 15px;
  }
`

const Image = styled.img`
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
`

class ExploreCard extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-5 col-md-4">
        <Explore>
          <Image src={this.props.image} alt="" />
          <Title>{this.props.title}</Title>
        </Explore>
      </div>
    )
  }
}

export default ExploreCard;
