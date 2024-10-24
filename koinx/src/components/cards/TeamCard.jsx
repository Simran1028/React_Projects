import { Box } from "@mui/material";
import React from "react";
import MainHeadings from "../Repetetive/MainHeadings";
import Headings from "../Repetetive/Headings";

const TeamCard = () => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius={1.5}
      bgcolor={"#e8f4fd"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      gap={{ xs: 0, md: 4 }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={0.5}
        alignItems={"center"}
      >
        <Box width={"100px"} height={"100px"} borderRadius={1}>
          <img
            src="https://deadline.com/wp-content/uploads/2024/01/john-cena-wwe-retiring.jpg"
            alt=""
            width={"100%"}
            height={"100%"}
            style={{ borderRadius: "8px", objectFit: "cover" }}
          />
        </Box>
        <Headings
          text="John Smith"
          styles={{ fontSize: "14px", fontWeight: "bold" }}
        />
        <Headings text="Designation here" styles={{ fontSize: "12px" }} />
      </Box>
      <Box>
        <Headings
          text={
            "Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.         It has since become the most well-known cryptocurrency in the world. Its popularity has inspired the development of many other cryptocurrencies.               Learn more about the cryptocurrency that started it all—the history behind it, how it works, how to get it, and what it can be used for."
          }
          styles={{
            fontSize: "12px",
            mt: 2,
            py: 1,
          }}
        />
      </Box>
    </Box>
  );
};

export default TeamCard;
