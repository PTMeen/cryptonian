import { useRef } from "react";
import {
  Flex,
  Container,
  Button,
  Box,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container maxW="1140px" as="header" py={8} shadow="xl" borderRadius="xl">
        <Flex justify="space-between" alignItems="end">
          <Box>
            <Logo />
          </Box>

          <Box display={{ base: "none", md: "block" }}>
            <Flex gap={4}>
              <Box>
                <ThemeToggle />
              </Box>
              <Button variant="outline" as={RLink} to="/signin">
                Sign In
              </Button>
              <Button colorScheme="cyan" as={RLink} to="/signup">
                Sign Up
              </Button>
            </Flex>
          </Box>

          <Box display={{ md: "none" }}>
            <IconButton
              ref={btnRef}
              variant="outline"
              icon={<RiMenu3Line size={25} />}
              onClick={onOpen}
              colorScheme="cyan"
            />
          </Box>
        </Flex>
      </Container>
      <MenuDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  );
};
export default Navbar;
