import { Box } from "@mui/material";
import React from "react";
import Headings from "../Repetetive/Headings";

const EventCard = ({ icon, iconBg, bg }) => {
  return (
    <Box p={1.5} bgcolor={bg} borderRadius={2} display={"flex"} gap={1}>
      <Box
        p={1}
        bgcolor={iconBg}
        borderRadius={"50%"}
        width={"38px"}
        height={"38px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {icon}
      </Box>
      <Box>
        <Headings
          text={
            "The sun set behind the mountains, painting the sky with hues of orange and pink."
          }
          styles={{ color: "#000", fontSize: "14px", mb: 1 }}
        />
        <Headings
          text={
            "As the sun descended behind the rugged peaks, its warm rays cast a magnificent display across the sky, blending vibrant shades of orange, pink, and gold, creating a breathtaking panorama that filled the heart with awe and wonder."
          }
          styles={{ color: "#3e5765", fontSize: "12px" }}
        />
      </Box>
    </Box>
  );
};

export default EventCard;
