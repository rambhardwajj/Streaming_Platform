import React from 'react'
import {  CardContent,CardActions , Button, CardMedia, Card , Box, Typography } from '@mui/material'
import { blue, lightBlue } from '@mui/material/colors'
import { Link} from 'react-router-dom'

const SignUp = () => {
  return (
	<div style={{  marginTop: 100, marginRight: 50,   display: 'flex' , justifyContent: 'space-around' , alignItems: 'center'}}> 
		<Box sx={{  minWidth: 275 , height: '86vh' }} >
		<Typography variant='h4'  style={{ padding: 20, marginLeft: 100, color: 'white'}} > Sign Up </Typography>
		<Card sx={{ borderRadius: 3, backgroundColor: "#131313",  display: 'flex', flexDirection: 'column', padding: 2,  height: 200,  maxWidth: 445 }}>
			<CardContent>
				<div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column' , padding : "2px"}} gutterBottom variant="h5" component="div">
					<input style={{ backgroundColor: "lightblue",  padding: "7px" }} type="text" placeholder='Email..' /> <br />
					<input style={{ backgroundColor: "lightblue" ,  padding: "7px" }} type="text" placeholder='password..' />
				</div>
			</CardContent>
			<CardActions>
				<Button size="small">Create account</Button>
				<Link to="/Login"> <Button size="small">already have an account</Button></Link>
			</CardActions>
   		</Card>
		</Box>
	</div>
  )
}

export default SignUp