import React from 'react'
import Listing_Details from '../components/listings_components/Listing_Details'
import Listing_Footer from '../components/listings_components/Listing_Footer'
import Footer from '../components/shared_components/Footer'
import Reviews from '../components/listings_components/Reviews'
import Hosted_By from '../components/listings_components/Hosted_By'
import Things_To_Know from '../components/listings_components/Things_To_Know'
import './Listing.css'

const Listing = () => {
  return (
    <div className='listing'>
        <Listing_Details/>
        <Reviews/>
        <Hosted_By/>
        <Things_To_Know/>
        <Listing_Footer/>
        <Footer/>
    </div>
  )
}

export default Listing
