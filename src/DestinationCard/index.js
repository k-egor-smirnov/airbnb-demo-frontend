import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  dispay: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  max-width: 144px;
  padding-right: 8px;
  flex: 0 0 50%;
  
  @media only screen and (min-width: 768px){
    max-width: 176px;    
  }    

  @media only screen and (min-width: 992px){
    max-width: 264px;
  }
`
const Title = styled.span`
  padding-top: 8px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: inherit;
  font-weight: bold;
`

const Image = styled.img`
  object-fit: cover;

  @media only screen and (min-width: 768px){
    max-width: 100%;
  }  
`

class DestinationCard extends Component {
  render() {
    return (
      <div className="
          col-xs-4
          col-sm-3
          col-md-2
          col-xl-2
          ">

        <div className="scrolling-card">
          <Card>
            <Image src={this.props.image}></Image>  
            <Title>{this.props.title}</Title>
          </Card>
        </div>
      </div>
    )
  }
}

export default DestinationCard