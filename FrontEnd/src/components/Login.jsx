import React from 'react'
import { CardContent,CardActions , Button, CardMedia, Card , Box, Typography } from '@mui/material'
import { CenterFocusStrong } from '@mui/icons-material'
const Login = () => {
  return (
	<div style={{  marginTop: 20, marginRight: 50,   display: 'flex' , justifyContent: 'space-around' , alignItems: 'center'}}> 
		<Box sx={{  minWidth: 275 , height: '86vh' }} >
		<Typography variant='h4'  style={{ padding: 20, marginLeft: 135, color: 'white'}} > Sign In </Typography>
		<Card sx={{ borderRadius: 3, backgroundColor: "#131313",  display: 'flex', flexDirection: 'column', padding: 2,  height: 250,  maxWidth: 445 }}>
			<CardContent>
				<div style={{ paddingTop: 40 , display: 'flex', flexDirection: 'column' }} gutterBottom variant="h5" component="div">
					<input style={{ backgroundColor: "lightblue",  padding: "7px" }} type="text" placeholder='Email..' /> <br />
					<input style={{ backgroundColor: "lightblue" ,  padding: "7px" }} type="text" placeholder='password..' />
				</div>
			</CardContent>
			<CardActions>
				<Button size="small"> forgot password</Button>
				<Button size="small"> newUser? Create new Account </Button>
			</CardActions>
   		</Card>
		</Box>
	</div>
  )
}

export default Login