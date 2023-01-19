import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  TableCaption,
  Link,
} from "@chakra-ui/react";
import CoinTableItem from "./CoinTableItem";

const CoinsTable = ({ coins }) => {
  return (
    <TableContainer>
      <Table size="sm" variant="simple">
        <TableCaption fontWeight="light" fontFamily="Open Sans">
          Powered by{" "}
          <Link color="cyan.500" isExternal href="https://www.coingecko.com/">
            Coin Gecko
          </Link>
        </TableCaption>
        <Thead>
          <Tr fontSize="xs">
            <Th></Th>
            <Th>#</Th>
            <Th>Coin</Th>
            <Th display={{ base: "none", md: "table-cell" }}></Th>
            <Th>Price</Th>
            <Th display={{ base: "none", md: "table-cell" }}>24h</Th>
            <Th>24h Volume</Th>
            <Th display={{ base: "none", md: "table-cell" }}>MKT</Th>
            <Th display={{ base: "none", md: "table-cell" }}>Last 7 Days</Th>
            <Th display={{ base: "none", md: "table-cell" }}></Th>
          </Tr>
        </Thead>
        <Tbody>
          {coins.map((coin) => (
            <CoinTableItem key={coin.id} {...coin} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default CoinsTable;
