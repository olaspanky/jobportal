import React from 'react'
import { jobs } from '@/constants'
import Jobcard from './Jobcard'
import { useState } from 'react'


const JobSpace = () => {
    const [searchTerm, setSearchTerm] = useState("");

   

  return (
    <div>

    <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
    <div className='col-span-4'>
    <h1>Welcome to your Number 1 job Application site</h1>
    </div>
    
    <div className='col-span-8 rounded-md w-full bg-white px-4 py-4 shadow-md transition transform duration-500 cursor-pointer m-3'>
    <input className='text-black rounded-md p-3 border border-black'
    id='searchInput' type='text' placeholder='search Jobs...' onChange={(event)=>{setSearchTerm(event.target.value)}}/>
       <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>

{
  jobs.filter((job)=>{
    if(searchTerm == ""){
      return job;
    } else if (job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())){
      return job
    }
  }).map((item) => (
    <Jobcard key={item.id} {...item} />
  ))
}
      
   
</div>
  </div>

    </div>
    



    
    </div>
  )
}

export default JobSpace
