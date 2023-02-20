import React from "react";
import { Stack, Box } from "@mui/material";
import { Loader } from "./";
import { VideoCard } from "./";

const Video = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  // console.log(videos);
  return (
    <Stack
      direction={direction ||"row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, index) => {
        console.log(item);
        return (
          <Box key={index}>{item.id.videoId && <VideoCard video={item} />}</Box>
        );
      })}
    </Stack> //ตั้งค่าstack ให้เป็นรูปแบบจากซ้ายไปขวาโดยใช้ row และเลียงจากซ้ายไปขวาโดยใช้ start
  );
};

export default Video;
