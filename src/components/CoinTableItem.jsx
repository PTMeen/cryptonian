import { Td, Tr, Link, Box, Image, Text, Flex } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinTableItem = ({
  id,
  market_cap_rank,
  image,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
  market_cap,
  total_volume,
  sparkline_in_7d,
}) => {
  return (
    <Tr>
      <Td>
        <AiFillStar />
      </Td>
      <Td>{market_cap_rank}</Td>
      <Td>
        <Link as={RLink} to={`/coins/${id}`}>
          <Flex gap={2}>
            <Image src={image} alt={id} borderRadius="full" w={6} mr={2} />
            <Text display={{ base: "none", md: "inline" }}>{name}</Text>
          </Flex>
        </Link>
      </Td>
      <Td display={{ base: "none", md: "table-cell" }}>
        <Text textTransform="uppercase">{symbol}</Text>
      </Td>
      <Td>
        <Text>${current_price.toLocaleString()}</Text>
      </Td>
      <Td>
        <Text color={price_change_percentage_24h > 0 ? "green.500" : "red.500"}>
          {price_change_percentage_24h.toFixed(2)}%
        </Text>
      </Td>
      <Td display={{ base: "none", md: "table-cell" }}>
        {total_volume.toLocaleString()}
      </Td>
      <Td display={{ base: "none", md: "table-cell" }}>
        {market_cap.toLocaleString()}
      </Td>
      <Td display={{ base: "none", md: "table-cell" }}>
        <Box w="80px">
          <Sparklines data={sparkline_in_7d.price}>
            <SparklinesLine color="cyan" />
          </Sparklines>
        </Box>
      </Td>
    </Tr>
  );
};
export default CoinTableItem;
