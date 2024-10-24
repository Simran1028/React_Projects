import { Box } from "@mui/material";
import React from "react";
import MainHeadings from "./Repetetive/MainHeadings";
import Headings from "./Repetetive/Headings";
import HoldingCoinCard from "./cards/HoldingCoinCard";

const AboutSection = () => {
  return (
    <Box>
      <MainHeadings text={"About Bitcoin"} />
      <Headings
        text="Waht is Bitcoin?"
        styles={{ fontSize: "14px", mt: 1.5, fontWeight: "bold" }}
      />

      <Headings
        text={
          "Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for verifying transactions and can be purchased on several exchanges."
        }
        styles={{
          fontSize: "12px",
          mt: 1,
          borderBottom: "1px solid #d3e0e6",
          pb: 2,
        }}
      />

      <Headings
        text="virtual currency designed to act"
        styles={{ fontSize: "14px", mt: 1.5, fontWeight: "bold" }}
      />
      <Headings
        text={
          "Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.         It has since become the most well-known cryptocurrency in the world. Its popularity has inspired the development of many other cryptocurrencies.               Learn more about the cryptocurrency that started it all—the history behind it, how it works, how to get it, and what it can be used for."
        }
        styles={{
          fontSize: "12px",
          mt: 1,
          pb: 2,
        }}
      />
      <Headings
        text={
          "Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.         It has since become the most well-known cryptocurrency in the world. Its popularity has inspired the development of many other cryptocurrencies.               Learn more about the cryptocurrency that started it all—the history behind it, how it works, how to get it, and what it can be used for."
        }
        styles={{
          fontSize: "12px",
          mt: 2,
          pb: 2,
        }}
      />
      <Headings
        text={
          "Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.         It has since become the most well-known cryptocurrency in the world. Its popularity has inspired the development of many other cryptocurrencies.               Learn more about the cryptocurrency that started it all—the history behind it, how it works, how to get it, and what it can be used for."
        }
        styles={{
          fontSize: "12px",
          mt: 2,
          pb: 2,
        }}
      />

      <Box mt={1}>
        <MainHeadings text={"Already holding Bitcoin?"} />
        <Box
          my={1}
          borderBottom={"1px solid #d3e0e6"}
          display="flex"
          gap={2}
          pb={2}
          flexDirection={{ xs: "column", md: "row" }}
        >
          {/* -----------card will be mapped here as i am doing in a hurry so i have not created dummy json */}
          <HoldingCoinCard
            text={"Calculate your Profits"}
            bg="#5cc9a7"
            src="https://images.unsplash.com/photo-1559650656-5d1d361ad10e?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <HoldingCoinCard
            text={"Calculate your Tax"}
            bg="#fb7e58"
            src="https://images.unsplash.com/photo-1559650656-5d1d361ad10e?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
      </Box>
      <Headings
        text={
          "Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.         It has since become the most well-known cryptocurrency in the world. Its popularity has inspired the development of many other cryptocurrencies. "
        }
        styles={{
          fontSize: "12px",
          mt: 2,
          pb: 2,
        }}
      />
    </Box>
  );
};

export default AboutSection;
