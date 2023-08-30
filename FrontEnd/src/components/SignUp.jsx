import React from 'react'
import {  CardContent,CardActions , Button, Card , Box, Typography, TextField } from '@mui/material'

import { useState  } from 'react'
import axios from 'axios';
import { Link} from 'react-router-dom'

const SignUp = () => {
	const [ email, setEmail] = useState("");
	const [ password, setPassword] = useState(""); 
	const [ image, setImage] = useState(""); 

  return (
	<div style={{  marginTop: 10, marginRight: 50,   display: 'flex' , justifyContent: 'space-around' , alignItems: 'center'}}> 
		<Box sx={{  minWidth: 275 , height: '86vh' }} >
		<Typography variant='h4'  style={{ padding: 10, marginLeft: 200, color: 'white'}} > Sign Up </Typography>
		<Card sx={{ borderRadius: 3, backgroundColor: "#131313",  display: 'flex', flexDirection: 'column', padding: 2,  height: 350,  width: 545 }}>
			<CardContent>
				<div style={{  marginTop: -30,  display: 'flex', flexDirection: 'column' , padding : "43px"}} >
					<TextField  style={{  borderRadius: 5,  backgroundColor: "lightblue",  padding: "1px" }} type="text" placeholder='Email..'
							variant='outlined' label='Email..'
							// onchange
							onChange={ (e) =>{
								setEmail(e.target.value);
							} }
					/> 
					<br />
					<TextField style={{  borderRadius: 5, backgroundColor: "lightblue" ,  padding: "1px" }} type="text" placeholder='password..' 
							variant='outlined' label='Password...'
							// onchange
							onChange={ (e) => {
								setPassword( e.target.value);
							} }
					/> 
					<br />
					<TextField style={{  borderRadius: 5, backgroundColor: "lightblue" ,  padding: "1px" }} type="text" placeholder='password..' 
							variant='outlined' label='Image Url...'
							// onchange
							onChange={ (e) => {
								setImage( e.target.value);
							} }
					/>
				</div>
			</CardContent>
			<CardActions style={{ marginTop : -40}}>
				<Button style={{ color : 'green' ,  marginLeft: 33 , marginRight: 33}} size= "large"  
					onClick={ async () => {
						const res=  await axios.post("http://localhost:3000/user/signup" , {
							username: email,
							password: password, 
							image :image
						})
						const data = res.data;
						console.log(data);
						localStorage.setItem("token", data.token );
						window.location = "/"
					}}
				 >Create account</Button>
				<Link to="/Login"> <Button size="small">already have an account</Button></Link>
			</CardActions>
   		</Card>
		</Box>
	</div>
  )
}

export default SignUp