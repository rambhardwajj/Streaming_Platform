import React from 'react'
import {  Typography, Box, Card, Stack } from '@mui/material'
import VideoCard from './VideoCard';
import ChannelDetail from './ChannelDetail';


const Videos = ({videos} ) =>  {
	console.log( {videos} ); 
	return ( <div style={{ minHeight: "90vh"}}> 
			<Stack marginLeft={15} marginRight={5}  marginTop={-60} direction="row" flexWrap="wrap"  justifyContent="start" gap={2} >
				{ videos.map((item, idx) => (
					<Box key={idx}>
						{item.id.videoId && <VideoCard video ={item} /> }
						{/* {item.id.channelId && <ChannelDetail channelDetails ={item} /> } */}
					</Box>
				)) }
			</Stack>

		</div>
	)
}



export default Videos