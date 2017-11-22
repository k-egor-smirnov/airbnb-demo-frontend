import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeCard from './Card';
import GoogleMapReact from 'google-map-react';

const HomesList = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 80px;
`;

const Filters = styled.div`
  margin-top: 1px; // Header border
  margin-left: auto;
  margin-right: auto;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-flow: row nowrap;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: #fff;
  width: auto;

  @media (min-width: 768px) {
    max-width: 752px;
  }

  @media (min-width: 992px) {
    max-width: 976px;
  }

  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;

const Filter = styled.a`
  margin-right: 12px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  font-size: 14px;
  line-height: 16px;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 7px;
  padding-bottom: 7px;
  color: #383838;

  &:hover {
    background: #008489;
    border: 1px solid #008489;
    color: #fff;
  }
`;

const Wrapper = styled.div`
  flex-flow: row nowrap;
  width: auto;
  overflow: none;
  margin: auto;

  @media (min-width: 768px) {
    max-width: 752px;
  }

  @media (min-width: 992px) {
    max-width: 976px;
  }
`;

class Homes extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  render() {
    return (
      <Wrapper>
        <Filters>
          <Filter>Dates</Filter>
          <Filter>Guests</Filter>
          <Filter min-display="xs">Room type</Filter>
          <Filter min-display="xs">Price</Filter>
          <Filter min-display="xs">Instant Book</Filter>
          <Filter>More filters</Filter>
        </Filters>

        <div className="col-lg-8">
          <HomesList>
            <div className="col-xs-12 col-md-6">
              <HomeCard
                type="Entire house"
                reviews={97}
                beds={9}
                cost="$82"
                title="La Salentina, see, nature & relax"
                image="/house1.png"
              />
            </div>

            <div className="col-xs-12 col-md-6">
              <HomeCard
                type="Entire house"
                reviews={161}
                beds={5}
                cost="$82"
                title="Your private 3 bedr. riad and exclusive"
                image="/house2.png"
              />
            </div>

            <div className="col-xs-12 col-md-6">
              <HomeCard
                type="Entire treehouse"
                reviews={364}
                beds={1}
                cost="$200"
                title="Dreamy Tropical Tree House"
                image="/house3.png"
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <HomeCard
                type="Entire house"
                reviews={97}
                beds={9}
                cost="$82"
                title="La Salentina, see, nature & relax"
                image="/house1.png"
              />
            </div>

            <div className="col-xs-12 col-md-6">
              <HomeCard
                type="Entire house"
                reviews={161}
                beds={5}
                cost="$82"
                title="Your private 3 bedr. riad and exclusive"
                image="/house2.png"
              />
            </div>

            <div className="col-xs-12 col-md-6">
              <HomeCard
                type="Entire treehouse"
                reviews={364}
                beds={1}
                cost="$200"
                title="Dreamy Tropical Tree House"
                image="/house3.png"
              />
            </div>
          </HomesList>
        </div>

        <div className="col-lg-4">
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          />
        </div>
      </Wrapper>
    );
  }
}

export default Homes;
