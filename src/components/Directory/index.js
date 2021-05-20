import React from 'react'
import Footwear from '../../assets/Footwear.jpg'
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
            backgroundImage: `url(${Footwear})`
          }}
        >
          <a href='/'>Shop FootWear</a>
        </div>
      </div>
    </div>
  )
}

export default Directory
