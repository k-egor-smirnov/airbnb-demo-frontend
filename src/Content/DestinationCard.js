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
      <div className="col-2">
        <Card>
          <Image src={this.props.image}></Image>  

          <Information>
            <Title>{this.props.title}</Title>
          </Information>
        </Card>
      </div>
    
    )
  }
}

export default DestinationCard