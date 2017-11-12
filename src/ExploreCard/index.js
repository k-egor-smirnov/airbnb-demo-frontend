import React, {Component} from 'react'
import styled from 'styled-components'
import media from '../media'

const Explore = styled.div `
  display: flex;
  margin-right: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-sizing: border-box;
  max-width: 310px;
  flex: 0 1 auto;
  overflow: hidden;

  ${media.md `
    max-width: 305px;    
  `}

  ${media.sm `
    flex-flow: column nowrap;
    max-width: 144px;    
  `}
`

const Title = styled.span `
  padding: 8px;
  margin: auto;
  font-weight: bold;
`

const Image = styled.img `
  object-fit: cover;
`

class ExploreCard extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-5 col-md-4">

        <div className="scrolling-card">
          <Explore>
            <Image src={this.props.image} alt=""/>
            <Title>{this.props.title}</Title>
          </Explore>
        </div>
      </div>
    )
  }
}

export default ExploreCard;
