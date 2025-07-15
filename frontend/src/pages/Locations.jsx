import React from 'react'
import Filters from '../components/locations_components/Filters'
import Location_Card from '../components/locations_components/Location_Card'
import './Locations.css'


const Locations = () => {
  return (
    <div className='locations'>
      <Filters/>
      <div className='number_of_listings'>
        <p>200 + airbnb luxe stays in New York</p>
      </div>
      <Location_Card/>
    </div>
  )
}

export default Locations
