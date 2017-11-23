import React, { Component } from 'react';
import star from '../star.svg';
import {
  Card,
  Image,
  Information,
  Cost,
  Title,
  Type,
  Rating,
  Star,
  Reviews,
  Superhost
} from './styled';

class HomeCard extends Component {
  render() {
    return (
      <Card>
        <Image src={this.props.image} alt="" />

        <Information className="card-information">
          <Cost>{this.props.cost}</Cost>
          <Title>{this.props.title}</Title>
        </Information>

        <Type>
          {this.props.type} · {this.props.beds} beds
        </Type>

        <Rating>
          <Star src={star} />
          <Star src={star} />
          <Star src={star} />
          <Star src={star} />
          <Star src={star} />
          <Reviews>
            {this.props.reviews}
            <Superhost> · Superhost</Superhost>
          </Reviews>
        </Rating>
      </Card>
    );
  }
}

export default HomeCard;
