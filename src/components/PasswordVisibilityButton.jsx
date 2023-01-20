import { IconButton, InputRightElement } from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";

const PasswordVisibilityButton = ({ toggleShowPassword, showPassword }) => {
  return (
    <InputRightElement>
      <IconButton
        variant="ghost"
        onClick={toggleShowPassword}
        icon={showPassword ? <BiHide size={20} /> : <BiShow size={20} />}
      />
    </InputRightElement>
  );
};
export default PasswordVisibilityButton;
