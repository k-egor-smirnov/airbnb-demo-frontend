import React, { Component } from 'react'
import styled from 'styled-components'
import star from '../star.svg'

const Experience = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 229px;
  flex-basis: 229px;
  padding-left: 8px;
  padding-right: 8px;
  flex: 0 1 auto;
  overflow: hidden;
`;

const Information = styled.div`
  padding-top: 8px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const Cost = styled.span`
  font-weight: bold;
`

const Title = styled.span`
  padding-left: 8px;
`
const Rating = styled.div`
`

const Star = styled.img`
  margin-right: 4px;
  height: 12px;
`

const Reviews = styled.span`
`

const Image = styled.img`
  object-fit:  cover;
  width: 100%;
`

class ExperienceCard extends Component {
  render() {
    return (
      <div className="
        col-xs-6
        col-sm-4
        col-md-3
        col-xl-3
        ">
        
        <div className="scrolling-card row">  
          <Experience>
            <Image src={this.props.image} alt="" /> 
            <Information className="card-information">
              <Cost>{this.props.cost}</Cost>
              <Title>{this.props.title}</Title>

              <Rating>
              <Star src={star}/>
              <Star src={star}/>
              <Star src={star}/>
              <Star src={star}/>
              <Star src={star}/>

              <Reviews>{this.props.reviews} reviews </Reviews>
            </Rating>

            </Information>
          </Experience>
        </div>
      </div>
    )
  }
}

export default ExperienceCard;
