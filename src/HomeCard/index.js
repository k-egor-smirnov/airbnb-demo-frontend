import React, {Component} from 'react'
import styled from 'styled-components'
import star from '../star.svg'
import media from '../media'

const Card = styled.div `
  display: flex;
  margin-right: 16px;
  flex-flow: column nowrap;
  max-width: 310px;

  ${media.md `
    max-width: 305px;
  `}
`

const Image = styled.img `
  object-fit: cover;
`

const Information = styled.div `
  padding-top: 8px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: inherit;
`

const Cost = styled.span `
  font-weight: bold;
`

const Title = styled.span `
  padding-left: 4px;
  font-weight: bold;  
`

const Type = styled.span `
`

const Rating = styled.div `
`

const Star = styled.img `
  margin-right: 4px;
  height: 12px;
`

const Reviews = styled.span `
`

const Superhost = styled.span `

`

class HomeCard extends Component {
  render() {
    return (
      <div
        className="
          col-xs-6
          col-sm-5
          col-md-4
          ">

        <div className="scrolling-card">
          <Card>
            <Image src={this.props.image} alt=""/>

            <Information className="card-information">
              <Cost>{this.props.cost}</Cost>
              <Title>{this.props.title}</Title>
            </Information>

            <Type>{this.props.type}
              • {this.props.beds}
              beds</Type>

            <Rating>
              <Star src={star}/>
              <Star src={star}/>
              <Star src={star}/>
              <Star src={star}/>
              <Star src={star}/>
              <Reviews>{this.props.reviews}
                <Superhost>
                  • Superhost</Superhost>
              </Reviews>
            </Rating>
          </Card>
        </div>
      </div>
    )
  }
}

export default HomeCard;
