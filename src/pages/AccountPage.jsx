import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import WatchListTable from "../components/WatchListTable";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

import { useAuthContext } from "../context/authContext";
import { db } from "../firebase";

const AccountPage = () => {
  const { user } = useAuthContext();

  const [coins, setCoins] = useState([]);
  const userRef = doc(db, "users", `${user?.email}`);

  const removeCoin = async (coinId) => {
    try {
      const filteredCoins = coins.filter((coin) => coin.id !== coinId);
      await updateDoc(userRef, { watchList: filteredCoins });
      setCoins(filteredCoins);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    onSnapshot(userRef, (doc) => {
      setCoins(doc.data()?.watchList);
    });
  }, [userRef]);

  return (
    <Container as="main" maxW="1140px" minH="80vh" p={0}>
      <Box as="section">
        <Box my={16} p={8} borderRadius="2xl" shadow="2xl">
          <Heading as="h2" size={{ base: "md", md: "lg" }} mb={4}>
            Account
          </Heading>
          <HStack justify="space-between">
            <Text fontSize={{ base: "sm", md: "md" }}>
              Welcome! {user?.email}!
            </Text>
            <Button colorScheme="cyan" size="sm" variant="outline">
              Logout
            </Button>
          </HStack>
        </Box>
      </Box>
      <Box as="section" my={16} p={8} borderRadius="2xl" shadow="2xl">
        <Heading as="h2" size={{ base: "md", md: "lg" }} mb={4}>
          Watch List
        </Heading>
        {coins.length ? (
          <Box>
            <WatchListTable coins={coins} removeCoin={removeCoin} />
          </Box>
        ) : (
          <Center h="full">
            <Text>No coins on your watch list.</Text>
          </Center>
        )}
      </Box>
    </Container>
  );
};
export default AccountPage;
