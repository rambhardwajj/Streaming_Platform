import React from 'react'
import { CardContent,CardActions , Button, CardMedia, Card , Box, Typography, TextField } from '@mui/material'
import { CenterFocusStrong } from '@mui/icons-material'
const Login = () => {
  return (
	<div style={{  marginTop: 20, marginRight: 50,   display: 'flex' , justifyContent: 'space-around' , alignItems: 'center'}}> 
		<Box sx={{  minWidth: 275 , height: '86vh' }} >
		<Typography variant='h4'  style={{ padding: 20, marginLeft: 195, color: 'white'}} > Sign In </Typography>
		<Card sx={{ borderRadius: 3, backgroundColor: "#131313",  display: 'flex', flexDirection: 'column', padding: 2,  height: 300,  width: 545 }}>
			<CardContent>
				<div style={{ paddingBottom: 30, paddingTop: 20, display: 'flex', flexDirection: 'column' , padding : "23px"}} gutterBottom variant="h5" component="div">
					<TextField  style={{ borderRadius: 5,  backgroundColor: "lightblue",  padding: "7px" }} type="text" placeholder='Email..'
							variant='outlined' label='Email..'
					/> 
					<br />
					<TextField style={{  borderRadius: 5, backgroundColor: "lightblue" ,  padding: "7px" }} type="text" placeholder='password..' 
							variant='outlined' label='Password...'
					/>
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