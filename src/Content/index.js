import React from 'react'
import ExploreCard from './ExploreCard'
import ExperienceCard from './ExperienceCard'
import HomeCard from './HomeCard'

export default () => {
  return (
    <main className="content">
      <section>
        <h1 className="section-name">Explore Airbnb</h1>      
        
        <div className="row">
          <div className="explore">
            <ExploreCard image="/homes.png" title="Homes" />
            <ExploreCard image="/experiences.png" title="Experiences"/>
            <ExploreCard image="/restaurants.png" title="Restaurants"/> 
          </div>
        </div>
      </section>

      <section>
        <h1 className="section-name">Experiences</h1>      
        
        <div className="row"> 
          <div className="experiences">
            <ExperienceCard cost="$29" reviews="44" title="Forest therapy" image="/forest.png"/>            
            <ExperienceCard cost="$69" reviews="46" title="Whale watching" image="/whale.png" />
            <ExperienceCard cost="$69" reviews="44" title="Table Mountain Summi, Cable Car Down" image="/mountain.png"/>            
            <ExperienceCard cost="$50" reviews="44" title="Salsa Night" image="/salsa.png"/>            
          </div>
        </div>
      </section>

      <section>
        <h1 className="section-name">Homes</h1>

        <div className="row">
            <div className="homes">
              <HomeCard type="Entire house" beds="9" cost="$82" title="La Salentina, see, nature & relax" image="/house1.png" />
              <HomeCard type="Entire house" beds="5" cost="$82" title="Your private 3 bedr. riad and exclusi..." image="/house2.png" />
              <HomeCard type="Entire treehouse" beds="1" cost="$200" title="Dreamy Tropical Tree House" image="/house3.png" />  
            </div>
        </div>
      </section>
    </main>
  )
}
