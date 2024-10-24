import { Box } from "@mui/material";
import React from "react";
import MainHeadings from "./Repetetive/MainHeadings";
import Headings from "./Repetetive/Headings";
import TeamCard from "./cards/TeamCard";

const TeamSection = () => {
  return (
    <Box pb={2}>
      <MainHeadings text={"Team"} />

      <Headings
        styles={{
          fontSize: "12px",
          mt: 2,
          pb: 2,
        }}
        text="Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.         It has since become the most well-known cryptocurrency in the world."
      />

      <Box mt={1} display={"flex"} flexDirection={"column"} gap={2.5}>
        {/* these will be mapped here */}
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </Box>
    </Box>
  );
};

export default TeamSection;
