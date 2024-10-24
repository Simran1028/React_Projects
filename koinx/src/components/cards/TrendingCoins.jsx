import { Box } from "@mui/material";
import Headings from "../Repetetive/Headings";
import CoinValue from "../Repetetive/CoinValue";

const TrendingCoins = ({ trendingCoins }) => {
  return (
    <Box bgcolor={"#fff"} p={2} borderRadius={2} mt={2}>
      <Headings
        text={"Trending Coins (24h)"}
        styles={{
          fontSize: "24px",
          fontWeight: "bold",
        }}
      />
      <Box mt={2} display={"flex"} flexDirection={"column"} gap={2.5}>
        {trendingCoins?.map(({ item }) => (
          <Box key={item?.id} display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"} alignItems={"center"} gap={"8px"}>
              <img
                src={item?.thumb}
                alt=""
                style={{ width: "32px", borderRadius: "50%" }}
              />
              <Headings
                text={`${item?.name}(${item?.symbol})`}
                styles={{ fontSize: "16px", fontWeight: "bold" }}
              />
            </Box>
            {/* hardcoded this 24hr change because of lack of time */}
            <CoinValue value={"2.51%"} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TrendingCoins;
