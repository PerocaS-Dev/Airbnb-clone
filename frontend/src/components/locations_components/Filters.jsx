import React from 'react'
import './Filters.css'
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Filters = () => {
  return (
    <div className='filters' >
        <span className='filter_option'>Price <ExpandMoreIcon sx={{ fontSize: 15 }}/> </span>
        <span className='filter_option'>Type of place <ExpandMoreIcon sx={{ fontSize: 15 }}/> </span>
        <span className='filter_option'>Free cancellation</span>
        <span className='filter_option'>Wifi</span>
        <span className='filter_option'>Kitchen</span>
        <span className='filter_option'>Air Conditioning</span>
        <span className='filter_option'>Washer</span>
        <span className='filter_option'>Iron</span>
        <span className='filter_option'>Dedicated workspace</span>
        <span className='filter_option'>Free parking</span>
        <span className='filter_option'>Dryer</span>
        <span className='filter_option'> <TuneIcon sx={{ fontSize: 15 }}/> Filter</span>
    </div>
  )
}

export default Filters
