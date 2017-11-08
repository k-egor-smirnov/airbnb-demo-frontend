import React from 'react'
import ExploreCard from './ExploreCard'
import ExperienceCard from './ExperienceCard'

export default () => {
  return (
    <main className="content">
      <section>
        <h1 className="section-name">Explore Airbnb</h1>      
        
        <div className="row explore">
          <ExploreCard image="/homes.png" title="Homes" />
          <ExploreCard image="/experiences.png" title="Experiences"/>
          <ExploreCard image="/restaurants.png" title="Restaurants"/>            
        </div>
      </section>

      <section>
        <h1 className="section-name">Experiences</h1>      
        
        <div className="row experiences">        
          <ExperienceCard cost="29$" experience_reviews="44" experience_title="Forest therapy" image="/forest.png" title=""/>            
          <ExperienceCard cost="69$" experience_reviews="46" experience_title="Whale watching" image="/whale.png" title=""/>            
          <ExperienceCard cost="69$" experience_reviews="44" experience_title="Table Mountain Summi, Cable Car Down" image="/mountain.png" title=""/>            
          <ExperienceCard cost="50$" experience_reviews="44" experience_title="Salsa Night" image="/salsa.png" title=""/>            
        </div>
      </section>
    </main>
  )
}
