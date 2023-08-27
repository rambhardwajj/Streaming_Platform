import React from 'react'
import { Stack , Box, Typography} from '@mui/material'
import { categories } from '../utils/constans'
import { Category } from '@mui/icons-material'
import { blueGrey, lightBlue } from '@mui/material/colors';



const SideBar = ( { cat , setCat } ) =>  (
	<Stack direction= "row" sx={{ overflow: "auto",  height: { sx:'auto', md: '95%' } , flexDirection: { md: 'column'} } } >
		{categories.map((category)=> (
			<button className="category-btn"  
					onClick={()=> setCat(category.name) }
					style={{ background: category.name === cat && '#0066b2' , color: 'white'}} >
				<span  style={{color : category.name===cat ? 'white' : '#002244', marginRight: '15px' } }> {category.icon} </span>
				<span> {category.name} </span>
			</button>
		) )}
	</Stack>
  )

export default SideBar