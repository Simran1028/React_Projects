import axios from "axios";

export const fetchCoinDetails = async (coin) => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=inr%2Cusd&include_24hr_change=true`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const fetchTrendingCoins = async () => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/search/trending`
    );
    return res.data?.coins;
  } catch (error) {
    console.log(error);
  }

  return null;
};
