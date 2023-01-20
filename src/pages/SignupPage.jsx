import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <Container as="main" maxW="1140px" h="85vh" p={16}>
      <Box w="450px" mx="auto" shadow="2xl" borderRadius="2xl" py={4} px={8}>
        <Heading as="h1">Sign Up</Heading>
        <Box my={8}>
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl my={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement>
                  <IconButton
                    variant="ghost"
                    onClick={toggleShowPassword}
                    icon={
                      showPassword ? <BiHide size={20} /> : <BiShow size={20} />
                    }
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement>
                  <IconButton
                    variant="ghost"
                    onClick={toggleShowPassword}
                    icon={
                      showPassword ? <BiHide size={20} /> : <BiShow size={20} />
                    }
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Box mt={4}>
              <Button
                colorScheme="cyan"
                w="full"
                rightIcon={<AiOutlineArrowRight size={20} />}
              >
                Sign Up
              </Button>
            </Box>
          </form>
          <Flex justify="center" mt={4}>
            <Text>Already a member? </Text>
            <Link color="cyan.500" ml={2} as={RLink} to="/signin">
              Sign In
            </Link>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};
export default SignupPage;
