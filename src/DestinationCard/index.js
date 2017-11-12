import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  dispay: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  padding-right: 8px;
  max-width: 144px;
  width: 100%;

@media only screen and (min-width: 768px){
    padding-right: 0px;    
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
  width: fit-content;
  font-weight: bold;
`

const Image = styled.img`
  object-fit: cover;

  @media only screen and (min-width: 768px){
    ${'' /* max-width: 100%; */}
  }  
`

const Wrapper = styled.div`
  flexgrow: 1;
  flex-basis: 20%;
`

class DestinationCard extends Component {
  render() {
    return (
      <Wrapper className="scrolling-card">
        <Card>
          <Image src={this.props.image}></Image>  
          <Title>{this.props.title}</Title>
        </Card>
      </Wrapper>
    )
  }
}

export default DestinationCard