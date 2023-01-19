import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Heading as="h2" size="lg" fontWeight="bold">
      <Link to="/">Cryptonian</Link>
    </Heading>
  );
};
export default Logo;
