import { Typography } from "@mui/material";
import React from "react";

const MainHeadings = ({ text }) => {
  return (
    <Typography fontSize={"24px"} fontWeight={"bold"}>
      {text}
    </Typography>
  );
};

export default MainHeadings;
