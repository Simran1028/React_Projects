import { Box, Button } from "@mui/material";
import React from "react";
import Headings from "../Repetetive/Headings";
import { East } from "@mui/icons-material";

const HoldingCoinCard = ({ text, bg, src }) => {
  return (
    <Box
      borderRadius={1}
      pl={1}
      py={1}
      pr={2}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      gap={3}
      flex={1}
      bgcolor={bg}
    >
      <Box width={"40%"} height={"100px"} borderRadius={1}>
        <img
          src={src}
          alt=""
          width={"100%"}
          height={"100%"}
          style={{ borderRadius: "8px", objectFit: "cover" }}
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Headings
          text={text}
          styles={{ color: "#fff", fontWeight: "bold", fontSize: "14px" }}
        />
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#fff",
            color: "#000",
            gap: "8px",
            padding: "8px  10px",
            borderRadius: "8px",
            "&:hover": {
              bgcolor: "#fff",
            },
          }}
        >
          <span>Check now</span>
          <East fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
};

export default HoldingCoinCard;
