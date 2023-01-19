import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  Divider,
  ButtonGroup,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

import Logo from "./Logo";

const MenuDrawer = ({ isOpen, onClose, btnRef }) => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Logo />
        </DrawerHeader>

        <DrawerBody my={8} textAlign="center">
          <ButtonGroup isAttached colorScheme="cyan" size="sm">
            <Button
              onClick={() => setColorMode("light")}
              variant={colorMode === "light" ? "solid" : "outline"}
              leftIcon={<BsSun size={15} />}
            >
              Light Mode
            </Button>
            <Button
              onClick={() => setColorMode("dark")}
              variant={colorMode === "dark" ? "solid" : "outline"}
              leftIcon={<BsMoon size={15} />}
            >
              Dark Mode
            </Button>
          </ButtonGroup>
          <Divider my={8} />
          <VStack gap={4} align="start">
            <Link as={RLink} to="/" onClick={onClose}>
              Home
            </Link>
            <Link as={RLink} to="/account" onClick={onClose}>
              Account
            </Link>
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          <HStack gap={2} w="full">
            <Button
              as={RLink}
              flexGrow={1}
              colorScheme="cyan"
              variant="outline"
              to="/signin"
              onClick={onClose}
            >
              Sign In
            </Button>
            <Button
              as={RLink}
              flexGrow={1}
              colorScheme="cyan"
              variant="solid"
              to="/signup"
              onClick={onClose}
            >
              Sign Up
            </Button>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
export default MenuDrawer;
