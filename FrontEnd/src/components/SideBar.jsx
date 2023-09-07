import React from 'react'
import { Button , Stack } from '@mui/material'
import Subscription from './Subscription'


const SideBar = ( {subsChannel, setSubsChannel} ) =>  {
  return (
		<div >
			<h2 style={{ fontFamily: "Cooper Black" , display: 'flex', justifyContent: 'space-around', alignItems: 'center' , color:"#F0EAD6" }}>  Subscriptions </h2>
			<Stack direction= "row"  style={{ display : 'flex', justifyContent: 'space-around', alignItems: 'center',  minWidth:200 }} color="white"  >
				<div>
					<Subscription  subsChannel={subsChannel} setSubsChannel={setSubsChannel} />
				</div>
			</Stack>
		</div>
  )
}

export default SideBar