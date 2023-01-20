import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";

const FormAlert = ({ status, msg }) => {
  return (
    <Alert status={status} borderRadius="xl" my={8}>
      <AlertIcon />
      <AlertDescription>{msg}</AlertDescription>
    </Alert>
  );
};

export default FormAlert;
