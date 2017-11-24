import React, { Component } from 'react';
import styled from 'styled-components';

const Reservation = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow-y: none;
  overflow: hidden;
  padding-bottom: 2px; /* Для шрифтов*/
  color: #383838;
`;

const Type = styled.span`
  font-size: 8px;
  color: #383838;
  line-height: 9px;
  font-weight: bold;
  margin-top: 7px;

  @media (min-width: 768px) {
    font-size: 10px;
    margin-top: 12px;
  }
`;

const Title = styled.span`
  margin-top: 2px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Cost = styled.span`
  margin-top: 4px;
  font-size: 12px;
  line-height: 14px;

  @media (min-width: 572px) {
    font-size: 18px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

class ReservationCard extends Component {
  render() {
    return (
      <div className="col-xs-6 col-md-4 col-lg-3">
        <Reservation>
          <Image src={this.props.image} alt="" />
          <Type>{this.props.type}</Type>
          <Title>{this.props.title}</Title>
          <Cost>{this.props.cost}</Cost>
        </Reservation>
      </div>
    );
  }
}

export default ReservationCard;
