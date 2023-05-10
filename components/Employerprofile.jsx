import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
  return (
    <div>

    <div><h1 className='text-lg font-extrabold text-center'> Employers Profile</h1></div>
      
            <div className='grid grid-cols-12 lg:px-10 p-3 gap-1 w-full lg:w-[40%] '>
            <div className='col-span-2 flex-end align-baseline'>Name</div>
            <div className='col-span-10'><input className='rounded-sm w-full p-1 text-black' type='text'/> </div>
            </div>
            <div className='grid grid-cols-12 lg:px-10 p-3 gap-1 w-full lg:w-[40%] '>
            <div className='col-span-2 flex-end align-baseline'>Username</div>
            <div className='col-span-10'><input className='rounded-sm w-full p-1 text-black' type='text'/> </div>
            </div>
            <div className='grid grid-cols-12 lg:px-10 p-3 gap-1 w-full lg:w-[40%] '>
            <div className='col-span-2 flex-end align-baseline'>Password</div>
            <div className='col-span-10'><input className='rounded-sm w-full p-1 text-black' type='text'/> </div>
            </div>
           



            <div>
            <div className='grid grid-cols-3 gap-2'>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white w-[10em] rounded-md'>view/edit profile</button></div>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white w-[10em] rounded-md'>view job status</button></div>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white w-[10em] rounded-md'>Close Account</button></div>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white w-[10em] rounded-md'>Inbox</button></div>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white w-[10em] rounded-md'>Job Board</button></div>
            <div className='col-span-1 grid place-content-center p-2 text-black'><button className='bg-white w-[10em] rounded-md'>Job status</button></div>
            </div>
            </div>

            <div className='m-3'>
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
