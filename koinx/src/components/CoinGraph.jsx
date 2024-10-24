import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MainHeadings from "./Repetetive/MainHeadings";
import Headings from "./Repetetive/Headings";
import { fetchCoinDetails } from "../api/api";
import { formatUSD, formatINR } from "../utils/utils";
import CoinValue from "./Repetetive/CoinValue";

// bitcoin img
const src =
  "https://assets.coingecko.com/coins/images/30323/standard/hpos10i_logo_casino_night-dexview.png?1696529224";

const CoinGraph = () => {
  const container = useRef();

  let coin = "Bitcoin";

  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "CRYPTO:BITCOINUSD",
          "timezone": "America/Phoenix",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(17, 85, 204, 0.07)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "range": "1M",
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  useEffect(() => {
    async function fetchData() {
      let data = await fetchCoinDetails(coin);
      const formattedUsd = formatUSD(data?.bitcoin?.usd);
      const formattedInr = formatINR(data?.bitcoin?.inr);
      data.bitcoin.usd = formattedUsd;
      data.bitcoin.inr = formattedInr;

      setCoinData(data?.bitcoin);
    }

    fetchData();
  }, []);
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"center"}
        gap={3}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Box width={"32px"} borderRadius={"50%"}>
            <img
              src={src}
              alt=""
              width={"100%"}
              style={{ borderRadius: "50%" }}
            />
          </Box>
          <MainHeadings text={coin} />
          <Headings
            text="BTC"
            styles={{ fontSize: "12px", fontWeight: "bold", color: "#5d667b" }}
          />
        </Box>
        <Box bgcolor={"#768396"} borderRadius={2} p={1}>
          <Headings
            text="Rank #1"
            styles={{ fontSize: "12px", color: "#fff" }}
          />
        </Box>
      </Box>
      <Box>
        <Box mt="20px" display={"flex"} gap={"24px"} alignItems={"center"}>
          <Headings
            text={coinData.usd}
            styles={{
              fontSize: { xs: " 20px", md: "24px" },
              fontWeight: "bold",
            }}
          />
          <Box display={"flex"} gap={"12px"} alignItems={"center"}>
            {/* hardcoded this 24hr change because of lack of time */}
            <CoinValue value={"2.51%"} />
            <Headings
              text={"(24H)"}
              styles={{
                color: "#768396",
                fontSize: "14px",
              }}
            />
          </Box>
        </Box>
        <Box mb="24px" pb="24px" borderBottom={"1px solid #e2e5e9 "}>
          <Headings
            text={coinData.inr}
            styles={{
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: "#39404f",
            }}
          />
        </Box>

        <Box
          mb="24px"
          display={"flex"}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Headings
            text={"Bitcoin Price Chart (USD)"}
            styles={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />
          <Box display="flex" gap={{ xs: "8px", md: "14px" }}>
            {["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"].map((item) => (
              <Headings
                key={item}
                text={item}
                styles={{
                  color: item === "7D" ? "#0141cf" : "#71798b",
                  fontSize: "13px",
                  bgcolor: item === "7D" && "#e2ecfe",
                  padding: item === "7D" ? "4px 12px" : "4px 0px",
                  borderRadius: "12px",
                }}
              />
            ))}
          </Box>
        </Box>
        <div
          className="tradingview-widget-container"
          ref={container}
          style={{ height: "400px", width: "100%" }}
        ></div>
      </Box>
    </Box>
  );
};

export default CoinGraph;
