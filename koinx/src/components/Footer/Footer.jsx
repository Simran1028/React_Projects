import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainHeadings from "../Repetetive/MainHeadings";
import CoinCard from "../cards/CoinCard";

const Footer = ({ trendingCoins }) => {
  return (
    <Box>
      <MainHeadings text={"You May Also Like"} />
      <Box display={"flex"} gap={1} mt={2} overflow={"auto"}>
        {trendingCoins?.slice(0, 5)?.map(({ item }) => (
          <CoinCard key={item} item={item} />
        ))}
      </Box>
      <Box mt={3}>
        <MainHeadings text={"Trending Coins"} />
        <Box display={"flex"} gap={1} mt={2} overflow={"auto"}>
          {trendingCoins?.slice(0, 5)?.map(({ item }) => (
            <CoinCard key={item} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
