import {
  Flex,
  GridItem,
  VStack,
  Text,
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

const TrendingCoinItem = (props) => {
  const { coin_id, small, name, symbol, price_btc } = props;
  return (
    <GridItem
      p={4}
      shadow="lg"
      borderRadius="xl"
      _hover={{ transform: "scale(1.05)", transition: "all 0.3s" }}
    >
      <Flex key={coin_id} justify="space-between">
        <HStack gap={2}>
          <Image boxSize="60px" borderRadius="full" src={small} alt={name} />
          <VStack align="start">
            <Link fontWeight="semibold" as={RLink} to={`/coins/${name}`}>
              {name}
            </Link>
            <Text fontSize="sm" color="gray.500">
              {symbol}
            </Text>
          </VStack>
        </HStack>

        <Flex align="center">
          <Image
            boxSize="15px"
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            alt="/"
            mr={2}
          />
          <Text>{price_btc.toFixed(7)}</Text>
        </Flex>
      </Flex>
    </GridItem>
  );
};
export default TrendingCoinItem;
