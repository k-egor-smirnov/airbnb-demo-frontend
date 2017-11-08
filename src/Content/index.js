import React from 'react'
import styled from 'styled-components'
import ExploreItem from './ExploreItem'

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
    </main>
  )
}
