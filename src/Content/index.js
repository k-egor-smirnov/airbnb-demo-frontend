import React from 'react'
import styled from 'styled-components'
import ExploreCard from './ExploreCard'
import ExperienceCard from './ExperienceCard'
import HomeCard from './HomeCard'
import ReservationCard from './ReservationCard'
import DestinationCard from './DestinationCard'

const ExploreCategory = styled.div`
  width: inherit;
  justify-content: flex-start;
  flex: 1 auto;  
`

const ExperienceCategory = styled.div`
  width: inherit;
  justify-content: flex-start;
  flex: 1 auto;  
`

const HomeCategory = styled.div`
  width: inherit;
  justify-content: flex-start;
  flex: 1 auto;  
`

const DestinationCategory = styled.div`
  width: inherit;
  justify-content: flex-start;
  flex: 1 auto;
`

const ReservationCategory = styled.div`
  width: inherit;
  justify-content: flex-start;
  flex: 1 auto;
`

export default () => {
  return (
    <main className="main-container">
      <section>
        <h1 className="section-name">Explore Airbnb</h1>      
        
        <div className="row">
          <ExploreCategory className="scrolling-wrapper">
            <ExploreCard image="/homes.png" title="Homes" />
            <ExploreCard image="/experiences.png" title="Experiences"/>
            <ExploreCard image="/restaurants.png" title="Restaurants"/> 
          </ExploreCategory>
        </div>
      </section>

      <section>
        <h1 className="section-name">Experiences</h1>      
        
        <div className="row"> 
          <ExperienceCategory className="scrolling-wrapper">
            <ExperienceCard cost="$29" reviews="44" 
              title="Forest therapy" image="/forest.png"/>            
            <ExperienceCard cost="$69" reviews="46" 
              title="Whale watching" image="/whale.png" />
            <ExperienceCard cost="$69" reviews="44" 
              title="Table Mountain Summi, Cable Car Down" image="/mountain.png"/>            
            <ExperienceCard cost="$50" reviews="44" 
              title="Salsa Night" image="/salsa.png"/>            
          </ExperienceCategory>
        </div>
      </section>

      <section>
        <h1 className="section-name">Homes</h1>

        <div className="row">
            <HomeCategory className="scrolling-wrapper">
              <HomeCard type="Entire house" reviews="97" beds="9" cost="$82" 
                title="La Salentina, see, nature & relax" image="/house1.png" />
              <HomeCard type="Entire house" reviews="161" beds="5" cost="$82" 
                title="Your private 3 bedr. riad and exclusive" image="/house2.png" />
              <HomeCard type="Entire treehouse" reviews="364" beds="1" cost="$200" 
                title="Dreamy Tropical Tree House" image="/house3.png" />  
            </HomeCategory>
        </div>
      </section>

      <section>
        <h1 className="section-name">Popular reservations around the world</h1>

        <div className="row">
          <ReservationCategory className="reservations scrolling-wrapper">
            <ReservationCard type="SPEAKEASY" title="Chumley's" cost="About $60 per person"
              image="./reservation1.png" /> 
            <ReservationCard type="KOREAN GASTROPUB" title="Hanjan" cost="About $55 per person" 
              image="./reservation2.png"/> 
            <ReservationCard type="GERMAN AMERICAN" title="Prime Meats" cost="About $55 per person" 
              image="./reservation3.png"/> 
            <ReservationCard type="FINE SEAFOOD" title="Seaprice" cost="About $70 per person" 
              image="./reservation4.png"/> 
          </ReservationCategory>
        </div>
      </section>


      <section>
        <h1 className="section-name">Featured destination</h1>

        <div className="row">
          <DestinationCategory className="scrolling-wrapper">
            <DestinationCard image="/dest1.png" title="Paris"/>
            <DestinationCard image="/dest2.png" title="Miami"/>
            <DestinationCard image="/dest3.png" title="Tokyo"/>
            <DestinationCard image="/dest4.png" title="Cape town"/>
            <DestinationCard image="/dest5.png" title="Seoul"/>
            <DestinationCard image="/dest6.png" title="Los Angeles"/>
          </DestinationCategory>
        </div>

      </section>
    </main>
  )
}
