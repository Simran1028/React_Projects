export const formatUSD = (usd) => {
  return "$" + usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export const formatINR = (number) => {
  const parts = number.toFixed(2).toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "₹" + parts.join(".");
};
