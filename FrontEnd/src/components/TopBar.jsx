import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constans'

const TopBar = ( { cat , setCat } ) =>  (
	<div style={{ padding: 10}} >
		<Stack  direction= "row" sx={{ overflow: "auto",  height: { sx:'auto', md: '15%' } , flexDirection: { md: 'row'}  }} >
			{categories.map((category)=> (
				<button className="category-btn"  
						onClick={()=> setCat(category.name) }
						style={{ background: category.name === cat && '#0066b2' , color: 'white' }} >
					<span  style={{color : category.name===cat ? 'white' : '#002244', marginRight: '15px' } }> {category.icon} </span>
					<span> {category.name} </span>
				</button>
			) )}
		</Stack>
	</div>
  )

export default TopBar