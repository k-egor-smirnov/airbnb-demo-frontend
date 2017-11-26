import React, { Component } from 'react';
import styled from 'styled-components';
import HomeCard from './Card';
import MapView from './MapView';
import DatePicker from './Filters/DatePicker';
import closeImage from './close.svg';
import Guests from './Filters/Guests/';
import More from './Filters/More/';
import ReactResizeDetector from 'react-resize-detector';
import { BottomButton } from './Filters/styled';
import { Cancel, Apply, ControllsWrapper } from './styled';
import mapImage from './map.svg';

const HomesList = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 40px;
  position: relative;
`;

const FiltersWrapper = styled.div`
  margin-top: 1px; // Header border
  display: flex;
  flex-flow: row nowrap;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: #fff;
  width: 100%;
  z-index: 10;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;

const Filters = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-items: flex-start;
  margin-left: 8px;
  max-width: 552px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 752px;
    margin: auto;
  }

  @media (min-width: 992px) {
    max-width: 976px;
    margin: auto;
  }
`;

const Filter = styled.div`
  display: ${props => (props.toHide ? 'none' : 'flex')};
  white-space: nowrap;
  position: relative;
  margin-left: 8px;
  margin-right: 4px;
  margin-top: 12px;
  margin-bottom: 12px;

  @media (min-width: 992px) {
    display: flex;
  }
`;

const MoreFilter = Filter.extend`
  position: static;
  @media (min-width: 992px) {
    position: static;
  }
`;

const FilterTitle = styled.a`
  border-radius: 4px;
  font-size: 14px;
  line-height: 16px;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 7px;
  padding-bottom: 7px;
  background: ${props => (props.active ? '#008489' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#383838')};
  border: ${props =>
    props.active ? '1px solid #008489' : '1px solid rgba(72, 72, 72, 0.2)'};
`;

const FilterPopup = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
  top: 0;
  left: 0;
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 20;

  @media (min-width: 768px) {
    border: 1px solid rgba(72, 72, 72, 0.1);
    border-radius: 4px;
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: 52px;
  }
`;

const OpenMap = styled.a`
  position: fixed;
  bottom: 24px;
  right: 8px;
  content: url(${mapImage});
  @media (min-width: 992px) {
    display: none;
  }
`;

const MoreFilterPopup = FilterPopup.extend`
  overflow-y: auto;

  @media (min-width: 768px) {
    border: none;
    border-radius: 0;
    width: 100%;
    height: 85vh;
    top: 56px;
  }

  @media (min-width: 992px) {
    position: fixed;
    width: 67%;
    top: 137px;
  }
`;

const FilterPopupHeader = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 14px;
  max-width: 572px;
  margin: auto;
  margin-bottom: 40px;
  justify-content: space-between;
  box-shadow: ${props =>
    props.shadow ? '0px 0.5px 0px rgba(72, 72, 72, 0.3);' : 'none'};

  @media (min-width: 768px) {
    display: none;
  }
`;

const MoreControllsWrapper = ControllsWrapper.extend`
  justify-content: flex-end;
  margin-right: 16px;
  align-items: center;

  @media (min-width: 992px) {
    margin: 0;
    justify-content: center;
  }
`;

const MoreApply = Apply.extend`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 28px;
  padding-left: 28px;
  background: #008489;
  color: #fff;
  border-radius: 4px;
`;

const MoreCancel = Cancel.extend``;

const FilterPopupTitle = styled.span`
  color: #383838;
  font-size: 14px;
  font-weight: bold;
`;

const ResetLink = styled.a`
  color: #0f7276;
  font-weight: bold;
  font-size: 14px;
  margin-right: 8px;
`;

const ClosePopupLink = styled.a`
  margin-left: 8px;
  content: url(${closeImage});
  height: 16px;
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
  height: 100vh;
  margin-top: 80px;
  left: calc((100% - 992px) / 2 + (992px / 12 * 8));
  right: 0;
  top: 57px;

  @media (min-width: 992px) {
    display: block;
  }
`;

const Pages = styled.div`
  display: flex;
  margin-top: 48px;
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

function calculateSize(width) {
  let size = 'xs';

  if (width >= 752) {
    size = 'md';
  }

  if (width >= 968) {
    size = 'lg';
  }

  return size;
}

class Homes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDatesFilter: false,
      displayGuestsFilter: false,
      displayMoreFilters: false,
      displaySize: calculateSize(window.width)
    };

    this.turnDatesFilterDisplayState = this.turnDatesFilterDisplayState.bind(
      this
    );

    this.turnGuestsFilterDisplayState = this.turnGuestsFilterDisplayState.bind(
      this
    );

    this.turnMoreFiltersDisplayState = this.turnMoreFiltersDisplayState.bind(
      this
    );

    this._onResize = this._onResize.bind(this);
  }

  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  turnDatesFilterDisplayState() {
    this.setState({
      displayDatesFilter: !this.state.displayDatesFilter
    });
  }

  turnGuestsFilterDisplayState() {
    this.setState({
      displayGuestsFilter: !this.state.displayGuestsFilter
    });
  }

  turnMoreFiltersDisplayState() {
    this.setState({
      displayMoreFilters: !this.state.displayMoreFilters
    });
  }

  _onResize(width) {
    this.setState({
      displaySize: calculateSize(width)
    });
  }

  render() {
    return (
      <Wrapper>
        <FiltersWrapper>
          <Filters>
            <Filter onClick={this.turnDatesFilterDisplayState}>
              <FilterTitle active={this.state.displayDatesFilter}>
                {this.state.displayDatesFilter
                  ? 'Check in — Check out'
                  : 'Dates'}
              </FilterTitle>
              <FilterPopup display={this.state.displayDatesFilter}>
                <FilterPopupHeader>
                  <ClosePopupLink onClick={this.turnDatesFilterDisplayState} />
                  <FilterPopupTitle>When</FilterPopupTitle>
                  <ResetLink>Reset</ResetLink>
                </FilterPopupHeader>
                <DatePicker
                  numberOfMonths={this.state.displaySize === 'md' ? 1 : 2}
                  displaySize={this.state.displaySize}
                />

                <ControllsWrapper>
                  <Cancel>Cancel</Cancel>
                  <Apply>Apply</Apply>
                </ControllsWrapper>
              </FilterPopup>
            </Filter>

            <Filter onClick={this.turnGuestsFilterDisplayState}>
              <FilterTitle active={this.state.displayGuestsFilter}>
                Guests
              </FilterTitle>
              <FilterPopup display={this.state.displayGuestsFilter}>
                <FilterPopupHeader shadow>
                  <ClosePopupLink onClick={this.turnGuestsDisplayState} />
                  <FilterPopupTitle>Guests</FilterPopupTitle>
                  <ResetLink>Reset</ResetLink>
                </FilterPopupHeader>
                <Guests />
                <BottomButton>Save</BottomButton>

                <ControllsWrapper>
                  <Cancel>Cancel</Cancel>
                  <Apply>Apply</Apply>
                </ControllsWrapper>
              </FilterPopup>
            </Filter>

            <Filter toHide>
              <FilterTitle>Room type</FilterTitle>
            </Filter>

            <Filter toHide>
              <FilterTitle>Price</FilterTitle>
            </Filter>

            <Filter toHide>
              <FilterTitle>Instant Book</FilterTitle>
            </Filter>

            <MoreFilter onClick={this.turnMoreFiltersDisplayState}>
              <FilterTitle active={this.state.displayMoreFilters}>
                More filters
              </FilterTitle>
              <MoreFilterPopup display={this.state.displayMoreFilters}>
                <FilterPopupHeader shadow>
                  <ClosePopupLink onClick={this.turnMoreFiltersDisplayState} />
                  <FilterPopupTitle>All filters (0)</FilterPopupTitle>
                  <ResetLink>Clear All</ResetLink>
                </FilterPopupHeader>
                <More />
                <BottomButton>Save</BottomButton>

                <MoreControllsWrapper>
                  <MoreCancel>Cancel</MoreCancel>
                  <MoreApply>See homes </MoreApply>
                </MoreControllsWrapper>
              </MoreFilterPopup>
            </MoreFilter>
          </Filters>
        </FiltersWrapper>
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

        <OpenMap />
        <ReactResizeDetector handleWidth onResize={this._onResize} />
      </Wrapper>
    );
  }
}

export default Homes;
