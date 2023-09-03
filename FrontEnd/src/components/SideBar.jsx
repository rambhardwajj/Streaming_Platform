import React from 'react'
import { Button } from '@mui/material'
import { grey } from '@mui/material/colors'

const SideBar = () => {
  return (
	<div style={{  position:'relative', zIndex:1,  marginTop: -600 , color: 'white', marginLeft: 60 }}>
		<Button  style={{ fontSize:20,  color: "grey"}}> ||| </Button> <br />
		Subscription
	</div>
  )
}

export default SideBar