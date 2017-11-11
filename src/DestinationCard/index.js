import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  min-width: 91px;
  max-width: 91px;
  dispay: flex;
  margin-right: 16px;
  justify-content: space-between;
  overflow: hidden;

  @media only screen and (max-width: 992px){
    max-width: 147px;
  }

  @media only screen and (max-width: 576px){
    max-width: 176px;
  }    
`
const Information = styled.div`
  padding-top: 8px;
`

const Title = styled.span`
  font-weight: bold;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  heigth: 264px;

  @media only screen and (max-width: 992px){
    height: 220px;
  }

  @media only screen and (max-width: 576px){
    height: 264px;
  }
`

class DestinationCard extends Component {
  render() {
    return (
      <div className="
          col-xs-4
          col-md-2
          col-sm-3
          ">

        <div className="scrolling-card">
          <Card>
            <Image src={this.props.image}></Image>  
            <Information>
              <Title>{this.props.title}</Title>
            </Information>
          </Card>
        </div>
      </div>
    )
  }
}

export default DestinationCard