import React from 'react'
import Admin_Buttons from '../components/shared_components/Admin_Buttons'
import Footer from '../components/shared_components/Footer'

import './Reserved.css'

const Reserved = () => {
  return (
    <div className='reserved'>
      <Admin_Buttons/>
      <div className='reservations_section'>
        <p className='reservations_title'>My reservations</p>
        <div className='reservations_table'>
          <table>
            <tr className='titles'>
              <th>Booked by</th>
              <th>Property</th>
              <th>Checkin</th>
              <th>Checkout</th>
              <th>Action</th>
            </tr>
            <tr className='booking_info'>
              <td>John</td>
              <td>Property 1</td>
              <td>19/06/2024</td>
              <td>24/06/2024</td>
              <td>
                <button className='delete_btn'>
                  Delete
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Reserved
