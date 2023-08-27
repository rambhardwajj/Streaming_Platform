import React from 'react'
import { CardContent,CardActions , Button, CardMedia, Card , Box, Typography } from '@mui/material'
import { CenterFocusStrong } from '@mui/icons-material'
const Login = () => {
  return (
	<div style={{ display: 'flex' , justifyContent: 'space-around' , alignItems: 'center'}}> 
		<Box sx={{minWidth: 275 , height: '86vh' }} >
		<Card sx={{ maxWidth: 445 }}>
			<CardContent>
				<div style={{ display: 'flex', flexDirection: 'column' , padding : "2px"}} gutterBottom variant="h5" component="div">
					<input style={{ padding: "7px" }} type="text" placeholder='Email..' /> <br />
					<input style={{ padding: "7px" }} type="text" placeholder='password..' />
				</div>
			</CardContent>
			<CardActions>
				<Button size="small">forgot password</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
   		</Card>
		</Box>
	</div>
  )
}

export default Login