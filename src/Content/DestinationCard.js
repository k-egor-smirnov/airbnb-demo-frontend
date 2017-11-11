import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  dispay: flex;
  margin-right: 16px;
  justify-content: space-between;
`
const Information = styled.div`
  padding-top: 8px;
`

const Title = styled.span`
  font-weight: bold;
`

const Image = styled.img`
  heigth: 220px;

  @media only screen and (max-width: 992px){
    height: 264px;
  }

  @media only screen and (max-width: 576px){
    height: 138px;
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