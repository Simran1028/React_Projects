import { Box } from "@mui/material";
import React from "react";
import MainHeadings from "./Repetetive/MainHeadings";
import Headings from "./Repetetive/Headings";
import EventCard from "./cards/EventCard";
import { Article, Moving } from "@mui/icons-material";

const Sentiments = () => {
  return (
    <Box>
      <MainHeadings text={"Sentiment"} />
      <Headings
        text={"Key Events"}
        styles={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#44475b",
          mt: 1.5,
        }}
      />
      <Box
        flexDirection={{ xs: "column", md: "row" }}
        mt={1}
        display={"flex"}
        gap={2}
        overflow={"auto"}
      >
        <EventCard
          bg={"#e8f4fd"}
          iconBg={"#0082ff"}
          icon={<Article sx={{ color: "#fff" }} />}
        />
        <EventCard
          bg={"#ebf9f4"}
          iconBg={"#0fba83"}
          icon={<Moving sx={{ color: "#fff" }} />}
        />
      </Box>

      <Headings
        text={"Analysis Estimates"}
        styles={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#44475b",
          mt: 2.5,
        }}
      />

      <Box mt={2} display={"flex"} gap={2} alignItems={"center"}>
        <Box
          p={8}
          borderRadius={"50%"}
          bgcolor={"#ebf9f4"}
          width={"48px"}
          height={"48px"}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
        >
          <Headings
            text={"76%"}
            styles={{ fontSize: "32px", color: "#0fba83" }}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={2} flex={0.8}>
          <Box display={"flex"} alignItems={"center"} gap={3}>
            <Headings
              text="Buy"
              styles={{ fontSize: "14px", color: "#7c7e8c", display: "flex" }}
            />
            <Box
              height={"4px"}
              bgcolor={"#00b386"}
              display={"flex"}
              flex={1}
            ></Box>
            <Headings
              text="76%"
              styles={{ fontSize: "14px", color: "#7c7e8c", display: "flex" }}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={3}>
            <Headings
              text="Hold"
              styles={{ fontSize: "14px", color: "#7c7e8c", display: "flex" }}
            />
            <Box
              height={"4px"}
              bgcolor={"grey"}
              display={"flex"}
              flex={0.2}
            ></Box>
            <Headings
              text="8%"
              styles={{ fontSize: "14px", color: "#7c7e8c", display: "flex" }}
            />
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={3}>
            <Headings
              text="Sell"
              styles={{ fontSize: "14px", color: "#7c7e8c", display: "flex" }}
            />
            <Box
              height={"4px"}
              bgcolor={"#e50000"}
              display={"flex"}
              flex={0.5}
            ></Box>
            <Headings
              text="16%"
              styles={{ fontSize: "14px", color: "#7c7e8c", display: "flex" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sentiments;
