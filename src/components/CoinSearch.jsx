import { Heading, Input, Flex } from "@chakra-ui/react";

const CoinSearch = ({ searchText, setSearchText }) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "end" }}
      justify={{ md: "space-between" }}
    >
      <Heading as="h1" size="md" mb={{ base: 4, md: 0 }}>
        Search Crypto
      </Heading>
      <Input
        w={{ base: "full", md: "200px" }}
        placeholder="Search for coin"
        size="sm"
        borderRadius="xl"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </Flex>
  );
};
export default CoinSearch;
