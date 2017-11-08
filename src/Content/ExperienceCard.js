import React, { Component } from 'react'
import styled from 'styled-components'
import star from './star.svg'

const Experience = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-right: 16px;
`;

const Information = styled.div`
  padding-top: 8px;
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

class ExperienceCard extends Component {
  render() {
    return (
      <div className="col-3">
        <Experience>
          <img src={this.props.image} alt="" /> 
          <Information className="card-information">
            <Cost>{this.props.cost}</Cost>
            <Title>{this.props.title}</Title>
          </Information>

          <Rating>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>

            <Reviews>{this.props.reviews} reviews </Reviews>
          </Rating>

        </Experience>
      </div>
    )
  }
}

export default ExperienceCard;
