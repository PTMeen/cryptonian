import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RLink, useNavigate } from "react-router-dom";
import { Formik, Field } from "formik";

import { singinSchema } from "../formValidation";
import PasswordVisibilityButton from "../components/PasswordVisibilityButton";
import { useAuthContext } from "../context/authContext";
import FormAlert from "../components/FormAlert";

const SinginPage = () => {
  const { signIn } = useAuthContext();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (values) => {
    setError(false);
    setIsLoading(true);
    try {
      const { email, password } = values;
      await signIn(email, password);
      navigate("/account");
    } catch (err) {
      console.log(err.message);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container as="main" maxW="1140px" h="85vh" p={{ base: 4, md: 16 }}>
      <Box
        w="90%"
        maxW="450px"
        mx="auto"
        shadow="2xl"
        borderRadius="2xl"
        py={4}
        px={{ base: 4, md: 8 }}
      >
        <Heading as="h1">Sign In</Heading>
        {error && <FormAlert status="error" msg="Invalid Credentials" />}

        <Box my={8}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={singinSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ handleSubmit, errors, touched }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field as={Input} id="email" name="email" type="email" />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    my={4}
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                      />
                      <PasswordVisibilityButton
                        showPassword={showPassword}
                        toggleShowPassword={toggleShowPassword}
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <Box mt={4}>
                    <Button
                      type="submit"
                      colorScheme="cyan"
                      w="full"
                      rightIcon={<AiOutlineArrowRight size={20} />}
                      isDisabled={isLoading}
                      isLoading={isLoading}
                    >
                      Sign In
                    </Button>
                  </Box>
                </form>
              );
            }}
          </Formik>

          <Flex justify="center" mt={4}>
            <Text>Don't have an account? </Text>
            <Link color="cyan.500" ml={2} as={RLink} to="/signup">
              Sign Up
            </Link>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};
export default SinginPage;
