import { Box } from "@mui/material";
import React from "react";
import { specsItems } from "../constants/data";
import Headings from "./Repetetive/Headings";

const Specs = () => {
  return (
    <Box
      display={"flex"}
      gap={2}
      borderBottom={"1px solid #d3e0e6"}
      mt={4}
      overflow={"auto"}
    >
      {specsItems.map((item) => (
        <Headings
          key={item}
          text={item}
          styles={{
            color: item === "Overview" ? "#0141cf" : "#3e424a",
            fontSize: "16px",
            px: "4px",
            pb: "8px",
            borderBottom: item === "Overview" && "3px solid #0052fe",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        />
      ))}
    </Box>
  );
};

export default Specs;
