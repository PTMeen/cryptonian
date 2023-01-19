import { IconButton, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icon =
    colorMode === "light" ? <BsMoon size={20} /> : <BsSun size={20} />;

  return <IconButton variant="ghost" icon={icon} onClick={toggleColorMode} />;
};
export default ThemeToggle;
