import { Box } from "@mui/material";
import React from "react";
import Headings from "../Repetetive/Headings";
import CoinValue from "../Repetetive/CoinValue";

const CoinCard = ({ item }) => {
  return (
    <Box
      p={1.5}
      border={"1px solid #e3e3e3"}
      display={"flex"}
      flexDirection={"column"}
      borderRadius={2}
      width={"220px"}
    >
      <Box display={"flex"} gap={1} alignItems={"center"}>
        <img
          src={item?.thumb}
          alt=""
          style={{ width: "32px", borderRadius: "50%" }}
        />
        <Box display={"flex"} alignItems={"center"}>
          <Headings
            text={item?.symbol}
            styles={{ fontSize: "12px", color: "#202020" }}
          />
          <CoinValue value={"2.51%"} />
        </Box>
      </Box>
      <Box mt={1}>
        <Headings
          text={item?.data?.market_cap}
          style={{ fontSize: "16px", fontWeight: "bold" }}
        />
      </Box>
      <img
        src={item?.data?.sparkline}
        alt=""
        style={{ width: "100%", borderRadius: "50%" }}
      />
    </Box>
  );
};

export default CoinCard;
