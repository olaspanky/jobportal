import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Jobcard from '@/components/Jobcard'
import JobSpace from '@/components/JobSpace'
import Testimonials from '@/components/Testimonials'
import PriceTables from '@/components/PriceTables'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      
    >

    
    <Hero/>
    <JobSpace/>
    <Testimonials/>

    </main>
    
  )
}
