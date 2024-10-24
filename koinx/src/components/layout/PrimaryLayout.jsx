import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../Header/Header";

const PrimaryLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default PrimaryLayout;
