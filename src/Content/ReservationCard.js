import React, { Component } from 'react'
import styled from 'styled-components'
import media from '../media'

const Reservation = styled.div`
  display: flex;
  margin-right: 16px;
  flex-flow: column nowrap;
  overflow: none;
  width: 230px;
  
  ${media.tablet`
    width: 240px;
  `}
`

const Type = styled.div`
  padding-top: 12px;
`

const Title = styled.div`
  padding-top: 2px;
  font-weight: bold;
`

const Cost = styled.div`
  padding-top: 2px;
`

class ReservationCard extends Component {
  render() {
    return (
      <div className="scrolling-card">
        <div className="
          col-xs-6
          col-sm-4
          col-md-3
          ">

          <Reservation>
            <img src={this.props.image} alt="" /> 
            <Type>{this.props.type}</Type>
            <Title>{this.props.title}</Title>
            <Cost>{this.props.cost}</Cost>
          </Reservation>
        </div>
      </div>
    )
  }
}

export default ReservationCard