import React, {Component} from 'react'
import styled from 'styled-components'

const Card = styled.div `
  dispay: flex;
  flex-flow: column nowrap;
  padding-right: 8px;
  margin-bottom: 16px;
  color: #383838;
`
const Title = styled.span `
  padding-top: 8px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: fit-content;
  font-weight: bold;
`

const Image = styled.img `
  max-width: 100%;
  max-height: 100%; 
`

class DestinationCard extends Component {
  render() {
    return (
      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card className="scrolling-wrapper">
          <Image src={this.props.image}></Image>
          <Title>{this.props.title}</Title>
        </Card>
      </div>
    )
  }
}

export default DestinationCard