import { Button } from '@mui/material'
import React from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { subs } from '../utils/side'

const Subscription = ({subsChannel, setSubsChannel}) => {
  return ( <div>
		{ subs.map((channel) =>(
			<div style={{ display: 'flex', }}>
				<button className="category-btn"  
						style={{  background: channel.name === subsChannel && '#0066b2' , color: '#E2DFD2' , backgroundColor: '#181515' }}
						onClick={()=>{ setSubsChannel(channel.name) }} >  {channel.name}     </button>
				<CheckCircleIcon sx={{ marginTop: 2,  fontSize: "15px", color: "lightBlue", ml: "5px" }} />
			</div>
			))
		}
  </div>
  )
}

export default Subscription