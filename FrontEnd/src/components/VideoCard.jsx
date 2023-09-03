import React from 'react'
import { Button, Card, Typography, CardContent, CardMedia, CardActionArea, CardActions } from '@mui/material'
import { demoChannelTitle, demoProfilePicture, demoVideoTitle, demoVideoUrl, demoChannelUrl , demoThumbnailUrl } from '../utils/constans'
import { Link } from 'react-router-dom'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import  { useState } from 'react';


const VideoCard = ( { video : {id:{videoId}, snippet }}) => {
  return (
	    <div >
        <Card sx={{ width: { xs: '100%', sm: '350px', md: "350px", }  }} >
          <CardActionArea>
            {/* // if videoId exist go to the respecive url else go to the demo url  */}
            <Link to={ videoId ? `/video/${videoId}`: demoVideoUrl }>
              <CardMedia 
                  style={{ height: 190, width: 350}}
                  image={snippet?.thumbnails?.high?.url}  alt={snippet?.title}
              /> 
            </Link>
          </CardActionArea>  

          <CardActionArea>
            <CardContent sx={{ backgroundColor: "#1E1E1E", height: '70px' }}>
              <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
                <Typography variant="subtitle1" fontFamily="Arial" fontWeight="bold" color="white">
                  {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
              </Link>
              <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                <Typography variant="subtitle2" color="grey">
                  {snippet?.channelTitle || demoChannelTitle}
                  <CheckCircleIcon sx={{ fontSize: "15px", color: "cyan", ml: "5px" }} />
                </Typography>
              </Link>
            </CardContent>
          </CardActionArea>
          <CardActions  style={{ backgroundColor: "#1E1E1E" }}>
              {/* // Chat Gpt add the functionality to the button that if I click on the button the current video link gets copy to keyboard  */}
            <Button style={{  backgroundColor: "#1E1E1E" }} size="small" color="primary"
                     onClick={ ()=>{} } >
                 share
            </Button>
          </CardActions>
        </Card>
      </div>
  )
}

export default VideoCard