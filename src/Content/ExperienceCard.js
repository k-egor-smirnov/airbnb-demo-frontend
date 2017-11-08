import React, { Component } from 'react'
import styled from 'styled-components'
import star from './star.svg'

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 0px;
  padding-right: 0px;
  border-radius: 4px;
  margin: 16px;
`;

const Information = styled.div`
  padding-top: 8px;
  padding-left: 8px;
`

const Cost = styled.span`
  font-weight: bold;
`

const Title = styled.span`
  padding-left: 8px;
`
const Rating = styled.div`
  padding-left: 4px;
`

const Star = styled.img`
  padding-left: 4px;
  height: 12px;
`

const Reviews = styled.span`
  padding-left: 8px;
`

class ExperienceCard extends Component {
  render() {
    return (
      <div className="col-3">
        <Card className="experience-card">
          <img src={this.props.image} alt="" /> 
          <Information className="card-information">
            <Cost>{this.props.cost}</Cost>
            <Title>{this.props.experience_title}</Title>
          </Information>

          <Rating>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
            
            <Reviews>{this.props.experience_reviews} reviews </Reviews>
          </Rating>

        </Card>
      </div>
    )
  }
}

export default ExperienceCard;
