import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useRouter } from 'next/router';



function createstatus1(job, date, end, payment) {
    return { job, date, end, payment };
  }
  
  const rows1 = [
   
    createstatus1("HR Manager",  "23/03.2023", "23/03/2024", "confirmed" ),
    createstatus1("HR Manager",  "23/03.2023", "23/03/2024", "pending" ),
    createstatus1("HR Manager",  "23/03.2023", "23/03/2024", "pending" ),
    createstatus1("HR Manager",  "23/03.2023", "23/03/2024", "pending" ),
    
  ];

const Employerprofile = () => {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    console.log("User confirmed!");
    // Do something here, like navigate to another page
    router.push("/")
    setIsModalOpen(false);
  };


  const [toggle, setToggle] = useState(false)

  return (
    <div>

     <div className='text-center p-5'>
    <h1 className='font-extrabold text-lg '>Candidate Job portal</h1>
    </div>
      
            <div className='grid grid-cols-12 lg:px-10 p-3 gap-1 w-full lg:w-[40%] '>
            <div className='lg:col-span-2 text-[14px] lg:text-[24px] col-span-4 flex-end align-baseline'>Name</div>
            <div className='lg:col-span-10 col-span-8'><input className='rounded-sm w-full p-1 text-black' type='text'/> </div>
            </div>
            <div className='grid grid-cols-12 lg:px-10 p-3 gap-1 w-full lg:w-[40%] '>
            <div className='lg:col-span-2 text-[14px] lg:text-[24px] col-span-4 flex-end align-baseline'>Username</div>
            <div className='lg:col-span-10 col-span-8'><input className='rounded-sm w-full p-1 text-black' type='text'/> </div>
            </div>
            <div className='grid grid-cols-12 lg:px-10 p-3 gap-1 w-full lg:w-[40%] '>
            <div className='lg:col-span-2 text-[14px] lg:text-[24px] col-span-4 flex-end align-baseline'>Password</div>
            <div className='lg:col-span-10 col-span-8'><input className='rounded-sm w-full p-1 text-black' type='text'/> </div>
            </div>
            <div className='grid grid-cols-12 lg:px-10 p-3 gap-1 w-full lg:w-[40%] '>
            <div className='lg:col-span-2 text-[14px] lg:text-[24px] col-span-4 flex-end align-baseline'>Created On</div>
            <div className='lg:col-span-10 col-span-8'><input className='rounded-sm w-full p-1 text-black' type='text'/> </div>
            </div>



            <div>
            <div className='grid grid-cols-3 gap-2'>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white lg:w-[10em] rounded-md' onClick={()=> setToggle((prev) => !prev)} >view/edit jobs</button></div>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white lg:w-[10em] rounded-md' onClick={()=> setToggle((prev) => !prev)}  >view job status</button></div>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white lg:w-[10em] rounded-md' onClick={handleOpenModal}>Close Account</button></div>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white lg:w-[10em] rounded-md' onClick={()=> router.push("inbox")} >Inbox</button></div>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white lg:w-[10em] rounded-md'>Job Board</button></div>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white lg:w-[10em] rounded-md'>Job status</button></div>
            </div>
            </div>

            <div>
            
            {isModalOpen && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="fixed bg-gray-500 bg-opacity-75"></div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                    <div className="px-6 py-4">
                      <div className="text-lg font-medium text-black">Are you sure?</div>
                      <p className="mt-2 text-black">This action cannot be undone.</p>
                    </div>
                    <div className="px-6 py-4 bg-gray-100 text-right">
                      <button
                        className="px-4 py-2 text-gray-600"
                        onClick={handleCloseModal}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-4 py-2 bg-blue-500 text-white ml-2"
                        onClick={handleConfirm}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            </div>

            <div  className={` ${toggle ? 'flex' : 'hidden' } m-3 `}>
            <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1 className='text-blue-400'>Job Advertised</h1></TableCell>
            <TableCell align="left"><h1 className='text-blue-400'>Date Advertised</h1></TableCell>
            <TableCell align="left"><h1 className='text-blue-400'>End Date</h1></TableCell>
            <TableCell align="left"><h1 className='text-blue-400'>Payment</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow
              key={row.job}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.job}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.end}</TableCell>
              <TableCell align="left">{row.payment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
           
    
    </div>
  )
}

export default Employerprofile
