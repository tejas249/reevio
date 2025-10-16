import PricingSection from '@/components/PricingSection'
import React from 'react'

const pricing = () => {
  return (
    <div className='h-screen'>
        <h1 className='font-bold text-4xl text-purple-700 justify-center mt-8 mb-10 text-center'>Prices for our Services</h1>
         <PricingSection />
    </div>
  );
}

export default pricing