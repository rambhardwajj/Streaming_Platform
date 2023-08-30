import React from 'react'
import { Stack , Button } from '@mui/material'
import { Link} from 'react-router-dom'
import { logo } from '../utils/constans'
import SearchBar from './SearchBar'
const Navbar = () =>  (
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
);


export default Navbar