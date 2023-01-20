import { Box, Heading, Text } from "@chakra-ui/react";

const FooterDetails = () => {
  return (
    <>
      <Box>
        <Heading as="h3" size="sm" mb={4}>
          SUPPORT
        </Heading>
        <Box fontSize="sm" color="gray.500" lineHeight={2}>
          <Text>HELP CENTER</Text>
          <Text>CONTACT US</Text>
          <Text>API STATUS</Text>
          <Text>DOCUMENTATION</Text>
        </Box>
      </Box>
      <Box>
        <Heading as="h3" size="sm" mb={4}>
          INFO
        </Heading>
        <Box fontSize="sm" color="gray.500" lineHeight={2}>
          <Text>ABOUT US</Text>
          <Text>CAREERS </Text>
          <Text>INVEST</Text>
          <Text>LEGAL</Text>
        </Box>
      </Box>
    </>
  );
};
export default FooterDetails;
