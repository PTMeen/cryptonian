import { Center, Heading, Link, VStack } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

const NotFOundPage = () => {
  return (
    <Center minH="80vh">
      <VStack>
        <Heading as="h1">Page not found</Heading>
        <Link as={RLink} to="/" _hover={{ color: "cyan.500" }}>
          Go Home
        </Link>
      </VStack>
    </Center>
  );
};
export default NotFOundPage;
