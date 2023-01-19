import { useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import CoinSearch from "../components/CoinSearch";
import CoinsTable from "../components/CoinsTable";
import TrendingCoins from "../components/TrendingCoins";

const HomePages = ({ coins }) => {
  const [searchText, setSearchText] = useState("");

  const filteredCoins = coins.filter((value) => {
    if (!searchText) {
      return value;
    } else if (value.name.toLowerCase().includes(searchText.toLowerCase())) {
      return value;
    }
  });

  return (
    <Box as="main">
      <Container as="section" maxW="1140px" my={16} p={4} borderRadius="2xl">
        <Box as="article" shadow="xl" rounded="xl">
          <Box px={4}>
            <CoinSearch searchText={searchText} setSearchText={setSearchText} />
          </Box>
          <Box my={8}>
            <CoinsTable coins={filteredCoins} />
          </Box>
        </Box>

        <Box as="article" my={16} p={4} shadow="xl" rounded="xl">
          <TrendingCoins />
        </Box>
      </Container>
    </Box>
  );
};
export default HomePages;
