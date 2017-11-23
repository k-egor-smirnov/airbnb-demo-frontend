import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeCard from './Card';
import MapView from './MapView';

const HomesList = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 80px;
  position: relative;
`;

const Filters = styled.div`
  margin-top: 1px; // Header border
  margin-left: 8px;
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
  z-index: 10;

  @media (min-width: 768px) {
    max-width: 752px;
  }

  @media (min-width: 992px) {
    max-width: 976px;
    margin-left: auto;
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

  @media (max-width: 992px) {
    display: ${props => (props.toHide ? 'none' : 'flex')};
  }

  &:hover {
    background: #008489;
    border: 1px solid #008489;
    color: #fff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: auto;

  @media (min-width: 768px) {
    max-width: 752px;
  }

  @media (min-width: 992px) {
    max-width: 976px;
  }
`;

const MapWrapper = styled.div`
  display: none;
  position: fixed;
  width: 34%;
  height: 100%;
  margin-top: 80px;
  height: 100%;
  left: auto;
  top: 57px;

  @media (min-width: 992px) {
    display: flex;
  }
`;

const Pages = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const PagesList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 20px;
  align-items: center;
`;

const PageLink = styled.a`
  font-size: 16px;
  line-height: 19px;
  margin-right: 40px;

  background: ${props => (props.active ? '#008489' : 'white')};
  padding-left: ${props => (props.active ? '13px' : 0)};
  padding-right: ${props => (props.active ? '13px' : 0)};
  padding-top: ${props => (props.active ? '5px' : 0)};
  padding-bottom: ${props => (props.active ? '6px' : 0)};
  border-radius: ${props => (props.active ? '100%' : 0)};
  color: ${props => (props.active ? 'white' : '#0F7276')};
`;

const PagesInfo = styled.div`
  margin-bottom: 40px;
  font-size: 16px;
`;

const BottomHint = styled.span`
  font-size: 16px;
  line-height: 19px;
  justify-content: center;
  display: flex;
  margin-bottom: 25px;
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
          <Filter toHide>Room type</Filter>
          <Filter toHide>Price</Filter>
          <Filter toHide>Instant Book</Filter>
          <Filter>More filters</Filter>
        </Filters>

        <div className="col-xs-12 col-lg-8">
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
          <Pages>
            <PagesList>
              <PageLink active>1</PageLink>
              <PageLink>2</PageLink>
              <PageLink>3</PageLink>
              <PageLink>...</PageLink>
              <PageLink>17</PageLink>
            </PagesList>
            <PagesInfo>1 – 18 of 300+ Rentals</PagesInfo>
          </Pages>

          <BottomHint>
            Enter dates to see full pricing. Additional fees apply. Taxes may be
            added.
          </BottomHint>
        </div>

        <div>
          <MapWrapper>
            <MapView
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            />
          </MapWrapper>
        </div>
      </Wrapper>
    );
  }
}

export default Homes;
