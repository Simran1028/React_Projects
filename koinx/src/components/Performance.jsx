import { Box } from "@mui/material";
import React from "react";
import MainHeadings from "./Repetetive/MainHeadings";
import Headings from "./Repetetive/Headings";
import { ArrowDropUp } from "@mui/icons-material";
import { fundamentals1, fundamentals2 } from "../constants/data";

const Performance = () => {
  return (
    <Box>
      <MainHeadings text={"Performance"} />
      <Box display={"flex"} alignItems={"center"} gap={2} mt={2}>
        <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
          <Headings
            text={"Today's Low"}
            styles={{ color: "#44475b", fontSize: "14px" }}
          />
          <Headings
            text={"46,930.22"}
            styles={{ color: "#44475b", fontSize: "16px" }}
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          flex={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            height={"4px"}
            bgcolor={"red"}
            width={"100%"}
            borderRadius={"4px"}
          ></Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
          <Headings
            text={"Today's High"}
            styles={{ color: "#44475b", fontSize: "14px" }}
          />
          <Headings
            text={"49,343.22"}
            styles={{ color: "#44475b", fontSize: "16px" }}
          />
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={2} mt={4}>
        <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
          <Headings
            text={"52W Low"}
            styles={{ color: "#44475b", fontSize: "14px" }}
          />
          <Headings
            text={"16,930.22"}
            styles={{ color: "#44475b", fontSize: "16px" }}
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          flex={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            height={"4px"}
            bgcolor={"lightgreen"}
            width={"100%"}
            borderRadius={"4px"}
          ></Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
          <Headings
            text={"52W High"}
            styles={{ color: "#44475b", fontSize: "14px" }}
          />
          <Headings
            text={"49,743.22"}
            styles={{ color: "#44475b", fontSize: "16px" }}
          />
        </Box>
      </Box>

      <Box mt={5}>
        <Headings
          text={"Fundamentals"}
          styles={{ fontSize: "18px", fontWeight: "bold", color: "#44475b" }}
        />
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
          gap={{ xs: 0, md: 8 }}
          mb={{ xs: 0, md: 3 }}
        >
          <Box mt={2} display={"flex"} flexDirection={"column"} flex={1}>
            {fundamentals1.map((item) => (
              <Box
                key={item.prop}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderBottom={"1px solid #d3e0e6"}
                p={"16px 0px"}
                gap={2}
              >
                <Headings
                  text={item.prop}
                  styles={{
                    color: "#768396",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                />
                <Headings
                  text={item.val}
                  styles={{
                    color: "#000",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                />
              </Box>
            ))}
          </Box>
          <Box mt={2} display={"flex"} flexDirection={"column"} flex={1}>
            {fundamentals2.map((item) => (
              <Box
                key={item.prop}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderBottom={"1px solid #d3e0e6"}
                p={item.extra ? "7px 0px" : "16px 0px"}
                gap={2}
              >
                <Headings
                  text={item.prop}
                  styles={{
                    color: "#768396",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                />
                <Box>
                  <Headings
                    text={item.val}
                    styles={{
                      color: "#000",
                      fontSize: "14px",
                      fontWeight: "bold",
                      textAlign: "end",
                    }}
                  />
                  <Headings
                    text={item.extra}
                    styles={{
                      color: "#000",
                      fontSize: "12px",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Performance;
