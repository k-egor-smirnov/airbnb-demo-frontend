import styled from 'styled-components';
import star from '../star.svg';

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 100%;
  margin-bottom: 16px;
  color: #383838;
`;

const Image = styled.img`width: 100%;`;

const Information = styled.div`
  padding-top: 8px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: inherit;

  font-size: 12px;
  font-height: 14px;
`;

const Cost = styled.span`
  font-weight: bold;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const Title = styled.span`
  padding-left: 4px;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const Type = styled.span`
  font-size: 12px;
  font-height: 14px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const Rating = styled.div``;

const Star = styled.img`
  margin-right: 4px;
  height: 12px;
`;

const Reviews = styled.span`
  white-space: nowrap;
  margin-left: 4px;
  font-size: 12px;
  line-height: 14px;
`;

const Superhost = styled.span``;

export {
  Card,
  Image,
  Information,
  Cost,
  Title,
  Type,
  Rating,
  Reviews,
  Superhost,
  Star
};
