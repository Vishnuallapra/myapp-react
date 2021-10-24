import { Button, TextField } from '@material-ui/core'
import React from 'react'

const Register = () => {
    return (
        <div>
 <TextField
  variant="outlined"
  fullWidth
  label="Name"
  margin="normal"
  />

  <TextField
  variant="outlined"
  fullWidth
  label="Address"
  margin="normal"
  />

  <TextField
  type="number"
  variant="outlined"
  fullWidth
  label="Pincode"
  margin="normal"
  />

  <TextField
  type="number"
  variant="outlined"
  fullWidth
  label="Phone Number"
  margin="normal"
  />

  <TextField
  type="password"
  margin="normal"
  variant="outlined"
  fullWidth
  label="Enter Password"
  />

  <TextField
  type="password"
  margin="normal"
  variant="outlined"
  fullWidth
  label="Confirm Password"
  />


  <Button
  variant="contained"
  color="secondary"
  
  > Register  </Button>
        </div>
    )
}

export default Register
