import React from 'react'
import { Button , Stack } from '@mui/material'
import Subscription from './Subscription'


const SideBar = ( {subsChannel, setSubsChannel} ) =>  {
  return (
		<div style={{ borderRadius: 10, marginLeft: 20, marginTop:30,  backgroundColor: "#0E0E0E" }}>
			<h2 style={{  fontFamily: "Arial" , display: 'flex', justifyContent: 'space-around', alignItems: 'center' , color:"#F0EAD6" }}>  Subscriptions </h2>
			<Stack direction= "row"  style={{ display : 'flex', justifyContent: 'space-around', alignItems: 'center',  minWidth:200 }} color="white"  >
				<div>
					<Subscription  subsChannel={subsChannel} setSubsChannel={setSubsChannel} />
				</div>
			</Stack>
		</div>
  )
}

export default SideBar