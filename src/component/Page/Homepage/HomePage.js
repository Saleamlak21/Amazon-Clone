import React from 'react'
import Banner from './Banner'

import ProductSupplier from './Productsupplier '

function HomePage() {
  return (
    <div className=' bg-gray-100 -z-10'>
        <div className=' max-w-screen-2xl mx-auto '>
        <Banner className='mx-auto'/>
        <ProductSupplier/>
        </div>
      
    </div>
  )
}

export default HomePage
