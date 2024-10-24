import { Typography } from "@mui/material";
import React from "react";

const Headings = (props) => {
  const text = props.text;
  return <Typography {...props.styles}>{text}</Typography>;
};

export default Headings;
