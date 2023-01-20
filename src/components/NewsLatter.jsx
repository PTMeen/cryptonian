import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";

const NewsLatter = () => {
  return (
    <Box>
      <Heading as="h3" size="sm" mb={4}>
        Sign up for newsletter
      </Heading>
      <Flex gap={4}>
        <Input
          borderRadius="2xl"
          placeholder="email"
          size={{ base: "sm", md: "md" }}
        />
        <Button colorScheme="cyan" size={{ base: "sm", md: "md" }}>
          Sign Up!
        </Button>
      </Flex>
    </Box>
  );
};
export default NewsLatter;
