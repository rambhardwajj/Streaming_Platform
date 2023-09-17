import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import {Search} from '@mui/icons-material/';
import { grey } from '@mui/material/colors';
 
const SearchBar = () => {

	const [ searchText, setSearchText] = useState("");
	const navigate = useNavigate();

  return (
	<Paper style={{ backgroundColor: '#131313'}} 
		sx = {{  borderRadius : 20, border : '1px solid #e3e3e3' ,pl:2 , boxShadow:'none' , mr : {sm : 5}  }}
		conponent="Form"  
		onSubmit={(e) => {
			e.preventDefault();
			if( searchText){
				navigate(`/search/${searchText}`);
				setSearchText("");
			}
		}} >

		<input style={{backgroundColor: "#131313"  , color: 'white' }}  
			className='search-bar' 
			placeholder='Search...' 
			value={searchText}
		 	onChange={(e) => { setSearchText(e.target.value) }} 
		/>
		 
		<IconButton type='submit' sx={{ p:'10px' , color:'white'  }} >
			<Search /> 
		</IconButton>
		
	</Paper> 
  )
}

export default SearchBar