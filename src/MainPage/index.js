import React from 'react';
import styled from 'styled-components';
import ExploreCard from '../ExploreCard/';
import ExperienceCard from '../ExperienceCard/';
import HomeCard from '../Homes/Card';
import ReservationCard from '../ReservationCard/';
import DestinationCard from '../DestinationCard/';
import scrollArrow from '../next-page.svg';
import { Link } from 'react-router-dom';

const Main = styled.main`
  width: auto;
  overflow: none;

  @media (min-width: 768px) {
    max-width: 752px;
  }

  @media (min-width: 992px) {
    max-width: 976px;
  }

  margin: auto;
`;

const ScrollButton = styled.button`
  display: none;
  height: 40px;
  width: 40px;
  border: none;
  background: url(${scrollArrow}) no-repeat;
  background-size: cover;

  @media only screen and (min-width: 992px) {
    display: block;
    position: absolute;
    top: ${props => (props.top ? props.top : 0)};
    bottom: ${props => (props.bottom ? props.bottom : 0)};
    right: ${props => (props.right ? props.right : 0)};
    margin: auto;
  }
`;
const ExploreCategory = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex: 1 auto;
  position: relative;
`;

const ExperienceCategory = styled.div`justify-content: flex-start;`;

const HomeCategory = styled.div`
  display: flex;
  width: inherit;
  justify-content: flex-start;
  flex: 1 auto;
  position: relative;
`;
const ReservationCategory = styled.div`
  display: flex;
  width: inherit;
  position: relative;
`;

const DestinationCategory = styled.div`
  display: flex;
  width: inherit;
  position: relative;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #383838;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const MoreButton = styled.a`
  padding-right: 16px;
  text-decoration: none;
  font-size: 12px;
  color: #383838;

  &:after {
    margin-left: 8px;
    content: url('/arrow.svg');
  }

  @media only screen and (min-width: 576px) {
    font-size: 14px;
  }
`;

const Section = styled.section`
  padding-top: 48px;
  position: relative;
`;

export default () => {
  return (
    <Main>
      <Section>
        <SectionTitle>Explore Airbnb</SectionTitle>
        <ExploreCategory className="scrolling-wrapper">
          <ExploreCard image="/homes.png" title="Homes" />
          <ExploreCard image="/experiences.png" title="Experiences" />
          <ExploreCard image="/restaurants.png" title="Restaurants" />
        </ExploreCategory>

        <ScrollButton bottom="-53%" right="-1.2%" />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Experiences</SectionTitle>
          <MoreButton href="#">See all</MoreButton>
        </SectionHeader>

        <ExperienceCategory className="scrolling-wrapper">
          <ExperienceCard
            cost="$29"
            reviews={44}
            title="Forest therapy"
            image="/forest.png"
          />
          <ExperienceCard
            cost="$69"
            reviews={46}
            title="Whale watching"
            image="/whale.png"
          />
          <ExperienceCard
            cost="$69"
            reviews={44}
            title="Table Mountain Summi, Cable Car Down"
            image="/mountain.png"
          />
          <ExperienceCard
            cost="$50"
            reviews={44}
            title="Salsa Night"
            image="/salsa.png"
          />
        </ExperienceCategory>

        <ScrollButton bottom="-10%" right="-1.4%" />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Homes</SectionTitle>
          <Link to="/homes">
            <MoreButton href="#">See all</MoreButton>
          </Link>
        </SectionHeader>

        <HomeCategory className="scrolling-wrapper">
          <div className="col-xs-8 col-md-5 col-lg-4">
            <HomeCard
              type="Entire house"
              reviews={97}
              beds={9}
              cost="$82"
              title="La Salentina, see, nature & relax"
              image="/house1.png"
            />
          </div>

          <div className="col-xs-8 col-md-5 col-lg-4">
            <HomeCard
              type="Entire house"
              reviews={161}
              beds={5}
              cost="$82"
              title="Your private 3 bedr. riad and exclusive"
              image="/house2.png"
            />
          </div>

          <div className="col-xs-8 col-md-5 col-lg-4">
            <HomeCard
              type="Entire treehouse"
              reviews={364}
              beds={1}
              cost="$200"
              title="Dreamy Tropical Tree House"
              image="/house3.png"
            />
          </div>
        </HomeCategory>

        <ScrollButton bottom="-20%" right="-1.3%" />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Popular reservations around the world</SectionTitle>
          <MoreButton href="#">See all</MoreButton>
        </SectionHeader>

        <ReservationCategory className="scrolling-wrapper">
          <ReservationCard
            type="SPEAKEASY"
            title="Chumley's"
            cost="About $60 per person"
            image="./reservation1.png"
          />
          <ReservationCard
            type="KOREAN GASTROPUB"
            title="Hanjan"
            cost="About $55 per person"
            image="./reservation2.png"
          />
          <ReservationCard
            type="GERMAN AMERICAN"
            title="Prime Meats"
            cost="About $55 per person"
            image="./reservation3.png"
          />
          <ReservationCard
            type="FINE SEAFOOD"
            title="Seaprice"
            cost="About $70 per person"
            image="./reservation4.png"
          />
        </ReservationCategory>

        <ScrollButton bottom="-18%" right="-1.2%" />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Featured destination</SectionTitle>
          <MoreButton href="#">See all</MoreButton>
        </SectionHeader>

        <DestinationCategory className="scrolling-wrapper">
          <DestinationCard image="/dest1.png" title="Paris" />
          <DestinationCard image="/dest2.png" title="Miami" />
          <DestinationCard image="/dest3.png" title="Tokyo" />
          <DestinationCard image="/dest4.png" title="Cape town" />
          <DestinationCard image="/dest5.png" title="Seoul" />
          <DestinationCard image="/dest6.png" title="Los Angeles" />
        </DestinationCategory>

        <ScrollButton bottom="-26%" right="-0.5%" />
      </Section>
    </Main>
  );
};
