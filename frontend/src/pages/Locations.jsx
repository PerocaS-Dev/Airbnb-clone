import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Filters from '../components/locations_components/Filters'
import Location_Card from '../components/locations_components/Location_Card'
import './Locations.css'


const Locations = () => {
  const [allListings, setAllListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const location = useLocation();

  useEffect(() => {

    const fetchListings = async () => {
      const response = await fetch('/api/listings')
      const json = await response.json()

      if(response.ok){
        setAllListings(json);
      }
    }

    fetchListings();

  },[])

//here we are filtering by city using useLocation to fetch the part of the URL that has the city name and comparing it to the city name
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selectedCity = searchParams.get("location");

    if (selectedCity && selectedCity !== 'All locations'){
      const filtered = allListings.filter(
        (listing) => listing.city.toLowerCase() === selectedCity.toLowerCase()
      );
      setFilteredListings(filtered);
    }else{
      setFilteredListings(allListings);
    }
  }, [location.search, allListings])


  return (
    <div className='locations'>
      <Filters/>
      <div className='number_of_listings'>
        <p>200 + airbnb luxe stays in New York</p>
      </div>
      <div className='location_cards'>
        {filteredListings.map((listing) =>(
          <Location_Card key={listing._id} listing={listing}/>
        ))}
      </div>
    </div>
  )
}

export default Locations
