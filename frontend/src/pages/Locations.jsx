import React from 'react'
import { useEffect, useState } from 'react'
import Filters from '../components/locations_components/Filters'
import Location_Card from '../components/locations_components/Location_Card'
import './Locations.css'


const Locations = () => {
  const [listings, setListings] = useState(null);

  useEffect(() => {

    const fetchListings = async () => {
      const response = await fetch('/api/listings')
      const json = await response.json()

      if(response.ok){
        setListings(json);
      }
    }

    fetchListings();

  },[])


  return (
    <div className='locations'>
      <Filters/>
      <div className='number_of_listings'>
        <p>200 + airbnb luxe stays in New York</p>
      </div>
      <div className='location_cards'>
        {listings && listings.map((listing) =>(
          <Location_Card key={listing._id} listing={listing}/>
        ))}
      </div>
    </div>
  )
}

export default Locations
