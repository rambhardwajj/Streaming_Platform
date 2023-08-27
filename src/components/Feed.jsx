import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import {TopBar, Videos} from './'


const Feed = () => {
  const [ cat , setCat  ]  = useState("All")

  return (
    <div>
      <Stack sx={{ flexDirection : { sx : "column", md: "column" }}}>
        <Box  sx={{ height : { sx: 'auto' , md: '15vh' } , px: {sx: 0 , md: 6} }} >
            <TopBar cat = {cat} setCat={setCat} /> 
        </Box>
      </Stack>
        <Box p={2} pl={6} sx={{ overflowY: 'auto', height: '90vh'  }} >
            <Typography variant='h4' mb={4} fontWeight="bold" color={'#F0F8FF'}> {cat} 
                <span style={{ color: '#00FFFF' }}> Videos </span>
            </Typography>
        </Box>

        <Videos videos={[]} /> 
    </div>
  )
}

export default Feed