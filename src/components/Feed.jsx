import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import {SideBar, Videos} from './'


const Feed = () => {
  const [ cat , setCat  ]  = useState("New")

  return (
    <Stack sx={{ flexDirection : { sx : "column", md: "row" }}}>
      <Box  sx={{ height : { sx: 'auto' , md: '92vh' }, borderRight: '1px solid #3d3d3d' , px: {sx: 0 , md: 6} }} >
          <SideBar cat = {cat} setCat={setCat} /> 
      </Box>
       <Box p={2}  sx={{ overflowY: 'auto', height: '90vh'  }} >
          <Typography variant='h4' mb={4} fontWeight="bold" color={'#F0F8FF'}> {cat} 
              <span style={{ color: '#00FFFF' }}> Videos </span>
          </Typography>
       </Box>

       <Videos videos={[]} /> 
    </Stack>
  )
}

export default Feed