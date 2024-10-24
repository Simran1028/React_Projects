import { Box, Button } from "@mui/material";
import React from "react";
import Headings from "../Repetetive/Headings";
import { ArrowRight, ArrowRightAlt, East } from "@mui/icons-material";

const GetStartedCard = () => {
  return (
    <Box
      p={"32px"}
      bgcolor={"#0052fe"}
      borderRadius={3}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"12px"}
    >
      <Box
        height={"150px"}
        width={"150px"}
        display={{ xs: "flex", md: "none" }}
      >
        <img
          src="/phone2.png"
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Headings
        text="Get Started with KoinX for FREE"
        styles={{
          fontSize: "22px",
          color: "#fff",
          fontWeight: "bolder",
          px: "8px",
          textAlign: "center",
        }}
      />
      <Headings
        text="With our wide range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports."
        styles={{
          fontSize: "12px",
          color: "#e3e8f3",
          px: "8px",
          textAlign: "center",
        }}
      />
      <Box
        height={"150px"}
        width={"150px"}
        display={{ xs: "none", md: "flex" }}
      >
        <img
          src="/phone2.png"
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
          color: "#000",
          gap: "8px",
          padding: "8px 20px",
          borderRadius: "8px",
          "&:hover": {
            bgcolor: "#fff",
          },
        }}
      >
        <span style={{ fontSize: "12px", fontWeight: "bold" }}>
          Get Started for FREE
        </span>
        <East fontSize="small" />
      </Button>
    </Box>
  );
};

export default GetStartedCard;
