import React, { useState, useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { SideBar, Videos } from "../components";


const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    // <Box p={2} minHeight="95vh">
    //   <Typography
    //     variant="h4"
    //     fontWeight={900}
    //     color="white"
    //     mb={3}
    //     ml={{ sm: "100px" }}
    //   >
    //     search Result for <span style={{ color: "#FC1503" }}>{searchTerm}</span>{" "}
    //     video.
    //   </Typography>
    //   <Box display="flex">
    //     <Box sx={{ mr: { sm: "100px" } }}>
    //       {<Videos videos={videos}></Videos>}
    //     </Box>
    //   </Box>
    // </Box>
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {" "}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Result for {" "}
          <span style={{ color: "#fc1503" }}> {searchTerm} </span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;