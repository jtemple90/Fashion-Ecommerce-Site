import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'



const HomePageLayout = (props) => {
  return (
    <div className='full-height'>
      <Header/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default HomePageLayout
