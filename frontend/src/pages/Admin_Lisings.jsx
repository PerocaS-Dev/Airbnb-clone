import React from 'react'
import Listing_Card from '../components/admin_components/Listing_Card'
import Admin_Buttons from '../components/shared_components/Admin_Buttons'
import './Admin_Listings.css'

const Admin_Lisings = () => {
  return (
    <div className='admin_listings'>
      <Admin_Buttons/>
      <div className='my_listings_title'>
        <p>My Listings</p>
      </div>
      <Listing_Card/>
    </div>
  )
}

export default Admin_Lisings
