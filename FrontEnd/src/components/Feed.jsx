import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { TopBar, Videos} from './'
import { fetchFromRapidApi } from '../utils/fetchFromRapidApi'
import SideBar from './SideBar'

const Feed = () => {
  // Complete this useState funcionality in the UseEffct Hook 
  // I want to make a side bar consisting of channels that are subscribed so write the logic to do so
  
  const [ subsChannel , setSubsChannel ] = useState("All");
  const [ cat , setCat  ]  = useState("All");
  const [ videos , setVideos] = useState([]);
  
  useEffect( ()=>{
        // go to the fetchFromRapidApi funtion in the file and in that using axios we fetched the data and returned the data now 
        // fetchFromRapidApi function was a asynchronous function so we cann not just write
        // data = fetchFromRapidApi("dfs")  rather we have to use promises ie when the data is fetched return a promise and then pass the data [ .then(data) ]
        fetchFromRapidApi(`search?part=snippet&q=${cat}`).then((data)=> setVideos(data.items)).catch((error) => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching data:', error);
    });
  }, [cat]);

  useEffect( ()=>{
    fetchFromRapidApi( `search?part=snippet&q=${subsChannel}`).then((data)=> setVideos(data.items)).catch((error) =>{
          console.error('Error in fetching data from this channel', error);
    } )
  }, [subsChannel]);

  return (
    <div>
      <Stack sx={{ flexDirection : { sx : "column", md: "column" }}}>
        <Box  sx={{ height : { sx: 'auto' , md: '15vh' } , px: {sx: 0 , md: 6} }} >
            <TopBar cat = {cat} setCat={setCat} /> 
        </Box>
      </Stack>
      <Stack>
        <Box p={1} pb={2} pl={20} sx={{ height: '2vh'  }} >
            <Typography style={{display : 'flex', justifyContent: 'center'}} gap={1} variant='h4' mb={4} fontWeight="bold" color={'#F0F8FF'}> 
                {cat} 
                <span style={{ color: '#00FFFF' }}> Videos  </span>
            </Typography>
        </Box>
      </Stack>
      <Stack direction="row" >

          
          <SideBar subsChannel= {subsChannel} setSubsChannel={setSubsChannel} />

          {/* now after fetching the videos data from rapidapi and calling the function in the useEffect hook 
          and also using use state parsing the data recieved to use current state in the videos - 
          just render the Videos component and pass the data recieved as props in the Videos Components */}
          <Videos videos={videos} /> 
      </Stack>
    </div>
  )
}

export default Feed