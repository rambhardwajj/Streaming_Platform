import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { fetchFromRapidApi } from "../utils/fetchFromRapidApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromRapidApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box  flex={1}>
          <Box sx={{ marginLeft:10, justifyContent:"center", alignItems: "center",  width: "90%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
			{console.log(videoDetail)}
          </Box>
        </Box>
      </Stack>
	  
    </Box>
  );
};

export default VideoDetail;