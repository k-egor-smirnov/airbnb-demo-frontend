import React, { Component } from 'react'
import styled from 'styled-components'
import star from '../star.svg'

const Experience = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding-bottom: 16px;
  color: #383838;
`;

const Information = styled.div`
  margin-top: 8px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
`

const Cost = styled.span`
  font-weight: bold;
  font-size: 13px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.span`
  margin-left: 4px;
  font-size: 13px;  

  @media (min-width: 768px) {
    font-size: 15px;
  }
`
const Rating = styled.div`
`

const Star = styled.img`
  margin-right: 4px;
  height: 12px;
`

const Reviews = styled.span`
  margin-left: 4px;
  font-size: 12px;
`

const Image = styled.img`
  max-width: 100%;
  height : auto;
`

class ExperienceCard extends Component {
  render() {
    return (
      <div className="col-xs-6 col-md-4 col-lg-3">
        <Experience>
          <Image src={this.props.image} alt="" />
          <Information>
            <Cost>{this.props.cost}</Cost>
            <Title>{this.props.title}</Title>

            <Rating>
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />

              <Reviews>{this.props.reviews}
                reviews
              </Reviews>
            </Rating>

          </Information>
        </Experience>
      </div>
    )
  }
}

export default ExperienceCard;
