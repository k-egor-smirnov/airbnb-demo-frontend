import React from 'react'
import styled from 'styled-components'
import ExploreCard from '../ExploreCard/'
import ExperienceCard from '../ExperienceCard/'
import HomeCard from '../HomeCard/'
import ReservationCard from '../ReservationCard/'
import DestinationCard from '../DestinationCard/'
import scrollArrow from '../next-page.svg'

const Main = styled.main`
  width: auto;

  @media (min-width: 768px) {
    max-width: 752px;
  }

  @media (min-width: 992px) {
    max-width: 976px;
  }
  
  padding-left: 8px;
  margin: auto;
`

const ScrollButton = styled.a`
  display: none;

  @media only screen and (min-width: 992px){
    display: block;
    content: url(${scrollArrow});
    position: absolute;
    right: 0;
    margin: auto;
  }  
`
const ExploreCategory = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex: 1 auto;  
  position: relative;
`

const ExperienceCategory = styled.div`
  display: flex;  
  width: 100%;
  justify-content: flex-start;
  flex: 1 auto;  
  position: relative;
`

const HomeCategory = styled.div`
  display: flex;
  width: inherit;
  justify-content: flex-start;
  flex: 1 auto;
  position: relative;  
`
const ReservationCategory = styled.div`
  display: flex;
  width: inherit;
  justify-content: flex-start;
  flex: 1 auto;
  position: relative;  
`

const DestinationCategory = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
  overflow-x: auto
  position: relative;  
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SectionTitle = styled.h1`
  padding-left: 16px;
  font-size: 32px;
  
  @media only screen and (max-width: 576px){
    font-size: 24px;
  }
`

const MoreButton = styled.a`
  padding-right: 16px;
  text-decoration: none;
  font-size: 14px;  
  color: black;
  
  @media only screen and (max-width: 576px){
    font-size: 12px;
  }

  &:after {
    content: url('/arrow.svg');;
  }
`

const Section = styled.section`
  padding-top: 48px;
`

export default () => {
  return (
    <Main>
      <Section>
        <SectionTitle>Explore Airbnb</SectionTitle> 

        <div className="row">
          <ExploreCategory className="scrolling-wrapper">
            <ExploreCard image="/homes.png" title="Homes" />
            <ExploreCard image="/experiences.png" title="Experiences"/>
            <ExploreCard image="/restaurants.png" title="Restaurants"/>
          </ExploreCategory>
        </div>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Experiences</SectionTitle>      
          <MoreButton href="#">See all </MoreButton>    
        </SectionHeader>

        <div className="row"> 
          <ExperienceCategory className="scrolling-wrapper">
            <ExperienceCard cost="$29" reviews={44} 
              title="Forest therapy" image="/forest.png"/>            
            <ExperienceCard cost="$69" reviews={46} 
              title="Whale watching" image="/whale.png" />
            <ExperienceCard cost="$69" reviews={44} 
              title="Table Mountain Summi, Cable Car Down" image="/mountain.png"/>            
            <ExperienceCard cost="$50" reviews={44} 
              title="Salsa Night" image="/salsa.png"/>            
          </ExperienceCategory>

          <ScrollButton style={{"top": "37%"}}/>          
        </div>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Homes</SectionTitle>      
          <MoreButton href="#">See all </MoreButton>    
        </SectionHeader>

        <div className="row">
            <HomeCategory className="scrolling-wrapper">
              <HomeCard type="Entire house" reviews={97} beds={9} cost="$82" 
                title="La Salentina, see, nature & relax" image="/house1.png" />
              <HomeCard type="Entire house" reviews={161} beds={5} cost="$82" 
                title="Your private 3 bedr. riad and exclusive" image="/house2.png" />
              <HomeCard type="Entire treehouse" reviews={364} beds={1} cost="$200" 
                title="Dreamy Tropical Tree House" image="/house3.png" />  
            </HomeCategory>

          <ScrollButton style={{"top": "34%"}}/>          
        </div>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Popular reservations around the world</SectionTitle>      
          <MoreButton href="#">See all </MoreButton>    
        </SectionHeader>

        <div className="row">
          <ReservationCategory className="scrolling-wrapper">
            <ReservationCard type="SPEAKEASY" title="Chumley's" cost="About $60 per person"
              image="./reservation1.png" /> 
            <ReservationCard type="KOREAN GASTROPUB" title="Hanjan" cost="About $55 per person" 
              image="./reservation2.png"/> 
            <ReservationCard type="GERMAN AMERICAN" title="Prime Meats" cost="About $55 per person" 
              image="./reservation3.png"/> 
            <ReservationCard type="FINE SEAFOOD" title="Seaprice" cost="About $70 per person" 
              image="./reservation4.png"/> 
          </ReservationCategory>

          <ScrollButton style={{"top": "26%"}}/>          
        </div>
      </Section>


      <Section>
        <SectionHeader>
          <SectionTitle>Featured destination</SectionTitle>      
          <MoreButton href="#">See all </MoreButton>    
        </SectionHeader>

        <div className="row">
          <DestinationCategory className="scrolling-wrapper">
            <DestinationCard image="/dest1.png" title="Paris"/>
            <DestinationCard image="/dest2.png" title="Miami"/>
            <DestinationCard image="/dest3.png" title="Tokyo"/>
            <DestinationCard image="/dest4.png" title="Cape town"/>
            <DestinationCard image="/dest5.png" title="Seoul"/>
            <DestinationCard image="/dest6.png" title="Los Angeles"/>
          </DestinationCategory>

          <ScrollButton style={{"top": "37%", "right": "-1%"}}/>          
        </div>

      </Section>
    </Main>
  )
}
