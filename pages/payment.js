import React from 'react'
import Image from 'next/image'
import Payment from '@/components/Payment'
import PriceTables from '@/components/PriceTables'

const payment = () => {
  return (
   <>
   <PriceTables/>
   <Payment/>
   </>
  )
}

export default payment
