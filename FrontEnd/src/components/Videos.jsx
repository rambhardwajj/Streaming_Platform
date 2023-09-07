import React from 'react'
import {  Typography, Box, Card, Stack } from '@mui/material'
import VideoCard from './VideoCard';


const Videos = ({videos} ) =>  {
	console.log( {videos} ); 
	return ( <div style={{ position: "relative",  minHeight: "90vh"}}> 
			<Stack marginLeft={8} marginRight={0} marginTop={5} direction="row" flexWrap="wrap"  justifyContent="start" gap={2} >
				{ videos.map((item, idx) => (
					<Box key={idx}>
						{item.id.videoId && <VideoCard video ={item} /> }
					</Box>
				)) }
			</Stack>
		</div>
	)
}



export default Videos