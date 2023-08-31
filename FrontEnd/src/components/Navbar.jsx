import React from 'react'
import { Stack , Button } from '@mui/material'
import { Link} from 'react-router-dom'
import { logo } from '../utils/constans'
import SearchBar from './SearchBar'
import {  useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


function Navbar ()  {

	const [ email, setEmail ] = useState("");
	useEffect( ()=>{
		const getData = async () =>{
			
			// implementing try catch because axios error was comming whenever i was not logged in 
			try {
				const res = await axios.get("http://localhost:3000/user/me", {
					headers: {
						"Authorization": "Bearer " + localStorage.getItem("token")
					}
				});
				const data = res.data;
				console.log(data);
				if( data.username){
					console.log( data.username);
					setEmail(data.username);
				}

			} catch (error) {
				console.error("Axios error:", error);
			}
		}
		getData();
	} , [] );

	if(email){
		return (
		<div>
			
			<Stack direction= "row"  padding={2} alignItems="center"
				style={{background: 'black' , top : 0, justifyContent : 'space-between' ,  position : 'sticky'   }}>
					<Link to="/" style={{ display :  'flex' }}>
						<img src={logo}  height= {87} style={{ marginLeft: -30,  marginTop: -10,  marginBottom: -15}} />
					</Link>
					<SearchBar />
					<div style={{ display: 'flex' }}>
						<Button variant="outlined" 
							style={{ color: '#00FFFF',  marginLeft: "-30px" ,marginRight:"8px",marginTop : "7px", width: 25}} 
							onClick={()=>{
								localStorage.setItem( "token",  null);
								window.location = "/"
							}}
						
						>LogOut</Button>
					</div>
			</Stack>
		</div>
		)
	}
	console.log( "user nahi hai");
	return (
		<div>
			<Stack direction= "row"  padding={2} alignItems="center"
				style={{background: 'black' , top : 0, justifyContent : 'space-between' ,  position : 'sticky'   }}>
					<Link to="/" style={{ display :  'flex' }}>
						<img src={logo}  height= {87} style={{ marginLeft: -30,  marginTop: -10,  marginBottom: -15}} />
					</Link>
					<SearchBar />
					<div style={{ display: 'flex' }}>
						<Link to="/Login">
							<Button variant="outlined" style={{ color: '#00FFFF',  marginLeft: "-30px" ,marginRight:"8px",marginTop : "7px", width: 25}}>Login</Button>
						</Link>
						<Link to="/SignUp" >
							<Button variant="outlined" style={{  color: '#00FFFF',  marginTop : "7px"   , width: 25}}>SignUp</Button>
						</Link>
					</div>
			</Stack>
		</div>
	)

};


export default Navbar