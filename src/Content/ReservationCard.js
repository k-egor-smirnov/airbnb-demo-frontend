import React, { Component } from 'react'
import styled from 'styled-components'

const Reservation = styled.div`
  display: flex;
  margin: 16px;
  flex-flow: column nowrap;
  width: 230px;
  overflow: none;
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
      <div className="col-3">      
        <Reservation>
          <img src={this.props.image} alt="" /> 
          <Type>{this.props.type}</Type>
          <Title>{this.props.title}</Title>
          <Cost>{this.props.cost}</Cost>
        </Reservation>
      </div>
    )
  }
}

export default ReservationCard