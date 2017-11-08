import React, { Component } from 'react'
import styled from 'styled-components'
import star from './star.svg'

const Home = styled.div`
  display: flex;
  margin: 16px;
  flex-flow: column nowrap;
  width: 310px;
  overflow: none;
`

const Image = styled.img`
`

const Information = styled.div`
  padding-top: 8px;
`

const Cost = styled.span`
  font-weight: bold;
`

const Title = styled.span`
  padding-left: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;  
`


const Type = styled.span`
`

const Rating = styled.div`
`

const Star = styled.img`
  padding-left: 4px;
  height: 12px;
`

const Reviews = styled.span`
  padding-left: 8px;
`

const Superhost = styled.span`

`

class HomeCard extends Component {
  render() {
    return (
      <div className="col-4">
        <Home>  
          <img src={this.props.image} alt="" /> 

          <Information className="card-information">
            <Cost>{this.props.cost}</Cost>
            <Title>{this.props.title}</Title>
          </Information>

          <Type>{this.props.type} • {this.props.beds} beds</Type>            

          <Rating>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>  
            <Reviews>{this.props.reviews} {this.props.beds}
              <Superhost> • Superhost</Superhost>
            </Reviews>
          </Rating>
        </Home>
      </div>
    )
  }
}

export default HomeCard;