import React from 'react'
import styled from 'styled-components'
import ExploreItem from './ExploreItem'
import ExperienceItem from './ExperienceItem'

export default () => {
  return (
    <main className="content">
      <section>
        <h1 className="section-name">Explore Airbnb</h1>      
        
        <div className="row explore">
          <ExploreItem image="/homes.png" title="Homes" />
          <ExploreItem image="/experiences.png" title="Experiences"/>
          <ExploreItem image="/restaurants.png" title="Restaurants"/>            
        </div>
      </section>

      <section>
        <h1 className="section-name">Experiences</h1>      
        
        <div className="row experiences">        
          <ExperienceItem image="/forest.png" title=""/>            
          <ExperienceItem image="/whale.png" title=""/>            
          <ExperienceItem image="/mountain.png" title=""/>            
          <ExperienceItem image="/salsa.png" title=""/>            
        </div>
      </section>
    </main>
  )
}
