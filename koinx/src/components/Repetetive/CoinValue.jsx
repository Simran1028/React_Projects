import { ArrowDropUp } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import Headings from "./Headings";

const CoinValue = ({ value }) => {
  return (
    <Box
      p={"4px 6px"}
      bgcolor={"#ebf9f4"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"4px"}
    >
      <ArrowDropUp sx={{ color: "#14b079" }} />
      <Headings text={value} styles={{ fontSize: "14px", color: "#14b079" }} />
    </Box>
  );
};

export default CoinValue;
