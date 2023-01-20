import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import FooterDetails from "./FooterDetails";
import NewsLatter from "./NewsLatter";

const Footer = () => {
  return (
    <Container
      maxW="1140px"
      as="footer"
      my={8}
      p={8}
      shadow="xl"
      borderRadius="xl"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify={{ md: "space-between" }}
        align={{ md: "start" }}
      >
        <HStack
          align="flex-start"
          justify={{ base: "center", md: "start" }}
          gap={{ base: 20, md: 8 }}
        >
          <FooterDetails />
        </HStack>
        <Box mt={{ base: 8, md: 0 }}>
          <NewsLatter />
        </Box>
      </Flex>
    </Container>
  );
};
export default Footer;
