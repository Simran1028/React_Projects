import React, { useEffect, useState } from "react";
import PrimaryLayout from "../../components/layout/PrimaryLayout";
import { Box, Container, Grid } from "@mui/material";
import CoinGraph from "../../components/CoinGraph";
import GetStartedCard from "../../components/cards/GetStartedCard";
import TrendingCoins from "../../components/cards/TrendingCoins";
import Specs from "../../components/Specs";
import Performance from "../../components/Performance";
import Sentiments from "../../components/Sentiments";
import AboutSection from "../../components/AboutSection";
import TeamSection from "../../components/TeamSection";
import Footer from "../../components/Footer/Footer";
import { fetchTrendingCoins } from "../../api/api";
import Headings from "../../components/Repetetive/Headings";

const CoinDetailPage = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    async function fetchCoins() {
      const data = await fetchTrendingCoins();
      setTrendingCoins(data);
      console.log(data);
    }

    fetchCoins();
  }, []);
  return (
    <PrimaryLayout>
      <Box bgcolor={"#eff2f5"} px={{ xs: 0, md: 4 }} py={{ xs: 3, md: 2 }}>
        <Container>
          <Box mb={2} display={"flex"} alignItems={"center"} gap={1}>
            <Headings
              text="Cryptocurrencies"
              styles={{ fontSize: "14px", color: "#6a7d89" }}
            />
            {">>"}
            <Headings
              text="Bitcoin"
              styles={{ fontSize: "14px", color: "#000", fontWeight: "bold" }}
            />
          </Box>
          <Grid container spacing={1.5}>
            <Grid item md={8} sx={{ width: "100%" }}>
              <Box bgcolor={"#fff"} p={2} borderRadius={2} mb={1}>
                <CoinGraph />
              </Box>
              <Box mb={1}>
                <Specs />
              </Box>
              <Box bgcolor={"#fff"} p={2} borderRadius={2} mb={1} mt={4}>
                <Performance />
              </Box>
              <Box bgcolor={"#fff"} p={2} borderRadius={2} mb={1} mt={2}>
                <Sentiments />
              </Box>
              <Box bgcolor={"#fff"} p={2} borderRadius={2} mb={1} mt={2}>
                <AboutSection />
              </Box>
              <Box bgcolor={"#fff"} p={2} borderRadius={2} mb={1} mt={2}>
                <TeamSection />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box width={"100%"}>
                <GetStartedCard />
                <TrendingCoins trendingCoins={trendingCoins} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor={"#fff"}>
        <Container>
          <Box py={4}>
            <Footer trendingCoins={trendingCoins} />
          </Box>
        </Container>
      </Box>
    </PrimaryLayout>
  );
};

export default CoinDetailPage;
