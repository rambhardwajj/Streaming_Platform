import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import {  Videos} from './'
import { fetchFromRapidApi } from '../utils/fetchFromRapidApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
    const [ videos , setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect( ()=>{
        fetchFromRapidApi(`search?part=snippet&q=${searchTerm}`).then((data)=> setVideos(data.items)).catch((error) => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching data:', error);
        });
    }, [searchTerm]);


    return (
        <div>
            <Box p={2} minHeight="95vh">
              <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
                Search Results for <span style={{ color: "cyan" }}>{searchTerm}</span> videos
              </Typography>

              <Box display="flex">
                <Box sx={{ mr: { sm: '100px' } }}/>
                {<Videos videos={videos} />}
              </Box>
            </Box>
           
        </div>
    )
}

export default SearchFeed