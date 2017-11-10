import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  dispay: flex;
  
  margin-right: 16px;
`
const Information = styled.div`
  padding-top: 8px;
`

const Title = styled.span`
  font-weight: bold;
`

const Image = styled.img`
  heigth: 220px;
`

class DestinationCard extends Component {
  render() {
    return (
      <div className="scrolling-card">
        <div className="
          col-xs-4
          col-sm-3
          col-md-2
          ">

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