import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
 
  createData(1, 2700, 18000, "NA", "NA"),
  createData(2, 2700, 18000, "NA", "NA"),
  createData(3, 2700, 18000, "NA", "NA"),
  createData(4, 2700, 18000, "NA", "NA"),
  createData(5, 2700, 18000, "NA", "NA"),
  createData(6, 2700, 18000, "NA", "NA"),
  createData(7, 2700, 18000, "NA", "NA"),
  createData(8, 2700, 18000, "NA", "NA"),
  createData(9, 2700, 18000, "NA", "NA"),
  createData(10, 2700, 18000, "NA", "NA"),
  
];




function createData1(plan, access) {
  return { plan, access };
}

const rows1 = [
 
  createData1("1 MOnth with Cv access",  "anjkjdjklasjaskdklaskldjlashkldjasklklanfjvnvnsdvnsdjbvsdnvjsdvvnjksdnvvjdvjsvsdnvsdvsdnvjsdnv" ),
  createData1("1 MOnth with Cv access",  "anjkjdjklasjaskdklaskldjlashkldjasklklanfjvnvnsdvnsdjbvsdnvjsdvvnjksdnvvjdvjsvsdnvsdvsdnvjsdnv" ),
  createData1("1 MOnth with Cv access",  "anjkjdjklasjaskdklaskldjlashkldjasklklanfjvnvnsdvnsdjbvsdnvjsdvvnjksdnvvjdvjsvsdnvsdvsdnvjsdnv" ),
  createData1("1 MOnth with Cv access",  "anjkjdjklasjaskdklaskldjlashkldjasklklanfjvnvnsdvnsdjbvsdnvjsdvvnjksdnvvjdvjsvsdnvsdvsdnvjsdnv" ),
  createData1("1 MOnth with Cv access",  "anjkjdjklasjaskdklaskldjlashkldjasklklanfjvnvnsdvnsdjbvsdnvjsdvvnjksdnvvjdvjsvsdnvsdvsdnvjsdnv" ),
  createData1("1 MOnth with Cv access",  "anjkjdjklasjaskdklaskldjlashkldjasklklanfjvnvnsdvnsdjbvsdnvjsdvvnjksdnvvjdvjsvsdnvsdvsdnvjsdnv" ),
];





export default function BasicTable() {
  return (
    <div>

    <div className='m-10'>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1 className='text-blue-400'>PLAN</h1></TableCell>
            <TableCell align="left"><h1 className='text-blue-400'>ACCESS</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows1.map((row) => (
            <TableRow
              key={row.plan}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.plan}
              </TableCell>
              <TableCell align="left">{row.access}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>


    <div className='m-10'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h1 className='text-blue-400'>NO of JObs</h1></TableCell>
            <TableCell align="right"><h1 className='text-blue-400'>1 Month with CV access</h1></TableCell>
            <TableCell align="right"><h1 className='text-blue-400'>1 Month with no CV access</h1></TableCell>
            <TableCell align="right"><h1 className='text-blue-400'>1 Month with no CV access</h1></TableCell>
            <TableCell align="right"><h1 className='text-blue-400'>1 Month with no CV access</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>


   


    </div>
  );
}
