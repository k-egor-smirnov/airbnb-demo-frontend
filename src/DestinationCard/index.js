import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  dispay: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  padding-right: 8px;
  flex: 1 0 50%;
  max-width: 144px;
  width: 100%;

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
  flex-grow: 1;
  flex-basis: 33%;
`

class DestinationCard extends Component {
  render() {
    return (
      <Wrapper>
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
      </Wrapper>
    )
  }
}

export default DestinationCard