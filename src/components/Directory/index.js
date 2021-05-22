import React from 'react'
import Clearance from '../../assets/Clearance1.jpg'
import Clothing from '../../assets/Clothing.jpg'
import './styles.scss'

const Directory = () => {
  return (
    <div className='directory'>
      <div className="wrap">
        <div 
          className='item'
          style={{
            backgroundImage: `url(${Clothing})`
          }}
        >
          <a href='/'>Shop StreetWear</a>
        </div>
        <div 
          className='item'
          style={{
            backgroundImage: `url(${Clearance})`
          }}
        >
          <a href='/'>Shop Clearance</a>
        </div>
      </div>
    </div>
  )
}

export default Directory
