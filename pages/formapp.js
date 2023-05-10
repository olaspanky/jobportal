import React, { Component, useState } from 'react'
import { AppBar, Box, Button, Card, CardContent, Checkbox, FormControlLabel, FormGroup, Grid, TextField } from '@mui/material'
import {Formik, Form } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



export default function Formapp(){
    return(

        <Card>
        
        <CardContent>
            <FormikStepper
          

            initialValues={{
                firstName:"",
                lastName:"",
                maidenName:"",
                title:"",
                status:"",
                address:"",
            }} onSubmit={()=>{}}>
            
    

            <Grid
            container
            spacing={0}
            direction="column"
           
            alignItems="center"
            justifyContent="center"
            paddingLeft="auto"
            paddingRight="auto"
            style={{ minHeight: '100vh' }}>
            <div  width="50%">

            <h1>Your Details</h1>
                <TextField helperText="Full width!"
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>

              
                
                <FormGroup >
                <p>Marital status</p>
                <Box sx={{ flexDirection: 'row' }}>

                <FormControlLabel control={<Checkbox defaultChecked />} label="Single" />
                <FormControlLabel  control={<Checkbox />} label="married" />
                <FormControlLabel  control={<Checkbox />} label="other" />
                
                </Box>
                
                </FormGroup>



                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                
                <FormGroup >
                <p>Phone</p>
                <Box sx={{ flexDirection: 'row' }}>

                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Home"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Mobile"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Office"/>
               
                
                </Box>
                
                </FormGroup>


                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField helperText="Full width!"
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
               
                </div>
            </Grid>



            <Grid
            container
            spacing={0}
            direction="column"
           
            alignItems="center"
            justifyContent="center"
            paddingLeft="auto"
            paddingRight="auto"
            style={{ minHeight: '100vh' }}>
            <div  width="50%">



            <h1>Education</h1>
                

            <div>
            <Grid container spacing={2}>
            

            <Grid item xs={6}>
              <div>

              <div sx={{ flexDirection: 'row' }}>

              <div><p>CPE Year</p></div>
              <div><LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider></div>

              </div>

              <FormGroup >
                
                <Box sx={{ flexDirection: 'row' }}>

                <FormControlLabel control={<Checkbox defaultChecked />} label="passed" />
                <FormControlLabel  control={<Checkbox />} label="failed" />
                
                </Box>
                
                </FormGroup>
              
              </div>
            </Grid>

            <Grid item xs={6}>
              <div>
              <div>

              <div sx={{ flexDirection: 'row' }}>

              <div><p>Pre vocation Year</p></div>
              <div><LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider></div>
              </div>

              <FormGroup >
                
              <Box sx={{ flexDirection: 'row' }}>

              <FormControlLabel control={<Checkbox defaultChecked />} label="passed" />
              <FormControlLabel  control={<Checkbox />} label="failed" />
              
              </Box>
              
              </FormGroup>
              
              </div>
              </div>
            </Grid>
            
          </Grid>
            </div>
              
                
                <FormGroup >
                <p>Secondary Education</p>
                <Box sx={{ flexDirection: 'row' }}>

                <FormControlLabel control={<Checkbox defaultChecked />} label="Form1" />
                <FormControlLabel  control={<Checkbox />} label="Form2" />
                <FormControlLabel  control={<Checkbox />} label="Form3" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Form4" />
                <FormControlLabel  control={<Checkbox />} label="Form5" />
                <FormControlLabel  control={<Checkbox />} label="Form6" />
                
                </Box>
                
                </FormGroup>

                <div>
                <h4>SC/GSC</h4>
                <Grid container spacing={2}>

                <Grid item xs={8} >
                <p>SUBJECTS</p>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                
                </Grid>
                <Grid item xs={4}>
                <p>GRADE</p>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                </Grid>
                </Grid>
                </div>
               
                </div>
            </Grid>







            <Grid
            container
            spacing={0}
            direction="column"
           
            alignItems="center"
            justifyContent="center"
            paddingLeft="auto"
            paddingRight="auto"
            style={{ minHeight: '100vh' }}>
            <div  width="50%">



            <h1>Diploma qualification</h1>
                

            <div>
            <FormGroup >
                
            <Box sx={{ flexDirection: 'row' }}>

            <FormControlLabel control={<Checkbox defaultChecked />} label="Diploma" />
            <FormControlLabel  control={<Checkbox />} label="Advanced Diploma" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Graduate Diploma" />
            <FormControlLabel  control={<Checkbox />} label="Post Graduate Diploma" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Other" />
            
            </Box>


            <TextField helperText="Full width!"
                
            fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="CERTIFICATE"/><br/>
            <TextField 
            
            fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="EXAMINING BODY"/><br/>
            <TextField 
            
            fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="COUNTRY"/><br/>
            
            </FormGroup>
            </div>
              

               
                </div>
            </Grid>





            <Grid
            container
            spacing={0}
            direction="column"
           
            alignItems="center"
            justifyContent="center"
            paddingLeft="auto"
            paddingRight="auto"
            style={{ minHeight: '100vh' }}>
            <div  width="50%">

            <h1>OTHER EDUCATION</h1>
                <TextField helperText="Full width!"
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="CERTIFICATE"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="EXAMINING BODY"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="COUNTRY"/><br/>


                <Grid item xs={6}>
              <div>
              <div>

              <div sx={{ flexDirection: 'row' }}>

              <div><p>Pre vocation Year</p></div>
              <div><LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider></div>
              </div>

              <FormGroup >
                
              <Box sx={{ flexDirection: 'row' }}>

              <FormControlLabel control={<Checkbox defaultChecked />} label="passed" />
              <FormControlLabel  control={<Checkbox />} label="failed" />
              
              </Box>
              
              </FormGroup>
              
              </div>
              </div>
            </Grid>

                </div>


                <div  width="50%">

                <h1>TECHNICAL AND VOCATIONAL EDUCATION</h1>
                    <TextField helperText="Full width!"
                    
                    fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="UNIVERSITY"/><br/>
                    <TextField 
                    
                    fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="QUALIFICATION OBT."/><br/>
                    <TextField 
                    
                    fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="LEVEL"/><br/>
    
    
                    <Grid item xs={6}>
                  <div>
                  <div>
    
                  <div sx={{ flexDirection: 'row' }}>
    
                  <div><p> Year</p></div>
                  <div><LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider></div>
                  </div>
                  
                  </div>
                  </div>
                </Grid>
    
                    </div>



            </Grid>










            <Grid
            container
            spacing={0}
            direction="column"
           
            alignItems="center"
            justifyContent="center"
            paddingLeft="auto"
            paddingRight="auto"
            style={{ minHeight: '100vh' }}>
            <div  width="50%">

            <h1>Your Details</h1>
                <TextField helperText="Full width!"
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>

              
                
                <FormGroup >
                <p>Marital status</p>
                <Box sx={{ flexDirection: 'row' }}>

                <FormControlLabel control={<Checkbox defaultChecked />} label="Single" />
                <FormControlLabel  control={<Checkbox />} label="married" />
                <FormControlLabel  control={<Checkbox />} label="other" />
                
                </Box>
                
                </FormGroup>



                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                
                <FormGroup >
                <p>Phone</p>
                <Box sx={{ flexDirection: 'row' }}>

                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Home"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Mobile"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Office"/>
               
                
                </Box>
                
                </FormGroup>


                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField helperText="Full width!"
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
               
                </div>
            </Grid>



            <Grid
            container
            spacing={0}
            direction="column"
           
            alignItems="center"
            justifyContent="center"
            paddingLeft="auto"
            paddingRight="auto"
            style={{ minHeight: '100vh' }}>
            <div  width="50%">

            <h1>Your Details</h1>
                <TextField helperText="Full width!"
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>

              
                
                <FormGroup >
                <p>Marital status</p>
                <Box sx={{ flexDirection: 'row' }}>

                <FormControlLabel control={<Checkbox defaultChecked />} label="Single" />
                <FormControlLabel  control={<Checkbox />} label="married" />
                <FormControlLabel  control={<Checkbox />} label="other" />
                
                </Box>
                
                </FormGroup>



                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                
                <FormGroup >
                <p>Phone</p>
                <Box sx={{ flexDirection: 'row' }}>

                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Home"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Mobile"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Office"/>
               
                
                </Box>
                
                </FormGroup>


                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField helperText="Full width!"
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
               
                </div>
            </Grid>



            <Grid
            container
            spacing={0}
            direction="column"
           
            alignItems="center"
            justifyContent="center"
            paddingLeft="auto"
            paddingRight="auto"
            style={{ minHeight: '100vh' }}>
            <div  width="50%">

            <h1>Your Details</h1>
                <TextField helperText="Full width!"
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>

              
                
                <FormGroup >
                <p>Marital status</p>
                <Box sx={{ flexDirection: 'row' }}>

                <FormControlLabel control={<Checkbox defaultChecked />} label="Single" />
                <FormControlLabel  control={<Checkbox />} label="married" />
                <FormControlLabel  control={<Checkbox />} label="other" />
                
                </Box>
                
                </FormGroup>



                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                
                <FormGroup >
                <p>Phone</p>
                <Box sx={{ flexDirection: 'row' }}>

                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Home"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Mobile"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Office"/>
               
                
                </Box>
                
                </FormGroup>


                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField helperText="Full width!"
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
               
                </div>
            </Grid>



            <Grid
            container
            spacing={0}
            direction="column"
           
            alignItems="center"
            justifyContent="center"
            paddingLeft="auto"
            paddingRight="auto"
            style={{ minHeight: '100vh' }}>
            <div  width="50%">

            <h1>Your Details</h1>
                <TextField helperText="Full width!"
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>

              
                
                <FormGroup >
                <p>Marital status</p>
                <Box sx={{ flexDirection: 'row' }}>

                <FormControlLabel control={<Checkbox defaultChecked />} label="Single" />
                <FormControlLabel  control={<Checkbox />} label="married" />
                <FormControlLabel  control={<Checkbox />} label="other" />
                
                </Box>
                
                </FormGroup>



                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                
                <FormGroup >
                <p>Phone</p>
                <Box sx={{ flexDirection: 'row' }}>

                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Home"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Mobile"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Office"/>
               
                
                </Box>
                
                </FormGroup>


                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField helperText="Full width!"
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
               
                </div>
            </Grid>



            <Grid
            container
            spacing={0}
            direction="column"
           
            alignItems="center"
            justifyContent="center"
            paddingLeft="auto"
            paddingRight="auto"
            style={{ minHeight: '100vh' }}>
            <div  width="50%">

            <h1>Your Details</h1>
                <TextField helperText="Full width!"
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>

              
                
                <FormGroup >
                <p>Marital status</p>
                <Box sx={{ flexDirection: 'row' }}>

                <FormControlLabel control={<Checkbox defaultChecked />} label="Single" />
                <FormControlLabel  control={<Checkbox />} label="married" />
                <FormControlLabel  control={<Checkbox />} label="other" />
                
                </Box>
                
                </FormGroup>



                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                
                <FormGroup >
                <p>Phone</p>
                <Box sx={{ flexDirection: 'row' }}>

                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Home"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Mobile"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Office"/>
               
                
                </Box>
                
                </FormGroup>


                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField helperText="Full width!"
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
               
                </div>
            </Grid>



            <Grid
            container
            spacing={0}
            direction="column"
           
            alignItems="center"
            justifyContent="center"
            paddingLeft="auto"
            paddingRight="auto"
            style={{ minHeight: '100vh' }}>
            <div  width="50%">

            <h1>Your Details</h1>
                <TextField helperText="Full width!"
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>

              
                
                <FormGroup >
                <p>Marital status</p>
                <Box sx={{ flexDirection: 'row' }}>

                <FormControlLabel control={<Checkbox defaultChecked />} label="Single" />
                <FormControlLabel  control={<Checkbox />} label="married" />
                <FormControlLabel  control={<Checkbox />} label="other" />
                
                </Box>
                
                </FormGroup>



                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                
                <FormGroup >
                <p>Phone</p>
                <Box sx={{ flexDirection: 'row' }}>

                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Home"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Mobile"/>
                <TextField sx={{ m: 0.5 }} 
                margin="normal"
                 id="standard-basic" variant="standard" name="firstName" Component={TextField} label="Office"/>
               
                
                </Box>
                
                </FormGroup>


                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField helperText="Full width!"
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
                <TextField 
                margin="normal"
                fullWidth id="standard-basic" variant="standard" name="firstName" Component={TextField} label="First Name"/><br/>
               
                </div>
            </Grid>




            <div>
                <TextField id="standard-basic" variant="standard" name="maidenName" Component={TextField} label="First Name"/>
                <TextField id="standard-basic" variant="standard" name="title" Component={TextField} label="First Name"/>
            </div>

            <div>
                <TextField id="standard-basic" variant="standard" name="status" Component={TextField} label="First Name"/>
                <TextField id="standard-basic" variant="standard" name="address" Component={TextField} label="First Name"/>
            </div>
            
            </FormikStepper>
        </CardContent>
        
       </Card>
    )
}

export function FormikStepper({children, ...props}){
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0)
    const currentChild = childrenArray[step];

    function isLastStep(){
        return step === childrenArray.length - 1;
    }

    return <Formik
   {...props} onSubmit={async (values, helpers)=>{
    if(isLastStep()){
        await props.onSubmit(values, helpers);
    }else {
        setStep( s=> s+1 );
    }
   }}>
    <Form autoComplete='off'>{currentChild}
   {step> 0 ? <Button onClick={()=> setStep(s=> s-1)}>Back</Button> : null}
   <Button type='submit'> {isLastStep() ? 'submit': 'Next'} </Button> 

    </Form>
    </Formik>
}