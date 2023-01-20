import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Heading } from "@chakra-ui/react";
import TrendingCoinItem from "./TrendingCoinItem";

const TrendingCoins = () => {
  const url = "https://api.coingecko.com/api/v3/search/trending";
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setTrendings(response.data.coins));
  }, [url]);

  return (
    <>
      <Heading as="h2" size="md" mb={8}>
        Trending Coin
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        gap={8}
      >
        {trendings.map((trending) => {
          return <TrendingCoinItem key={trending.item.id} {...trending.item} />;
        })}
      </Grid>
    </>
  );
};
export default TrendingCoins;
