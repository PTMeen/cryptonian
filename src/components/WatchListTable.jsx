import {
  Box,
  HStack,
  IconButton,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";

const WatchListTable = ({ coins, removeCoin }) => {
  return (
    <TableContainer>
      <Table variant="striped" textAlign="center">
        <Thead>
          <Tr>
            <Th>Rank #</Th>
            <Th>Coin</Th>
            <Th>Remove</Th>
          </Tr>
        </Thead>
        <Tbody>
          {coins.map((coin) => {
            return (
              <Tr key={coin.id}>
                <Td>{coin?.rank}</Td>
                <Td>
                  <HStack gap={4} w="fit-content">
                    <Image
                      borderRadius="full"
                      src={coin?.image}
                      alt={coin.name}
                      w={8}
                    />
                    <Box w="fit-content">
                      <Text fontWeight="semibold">{coin?.name}</Text>
                      <Text color="gray.500">{coin?.symbol}</Text>
                    </Box>
                  </HStack>
                </Td>
                <Td>
                  <IconButton
                    onClick={() => removeCoin(coin.id)}
                    variant="ghost"
                    icon={<AiOutlineClose />}
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default WatchListTable;
