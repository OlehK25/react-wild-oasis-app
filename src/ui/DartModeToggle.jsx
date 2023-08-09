import { LuMoon, LuSun } from "react-icons/lu";
import ButtonIcon from "./ButtonIcon.jsx";
import { useDarkMode } from "../context/DarkModeContext.jsx";

function DartModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <LuSun /> : <LuMoon />}
    </ButtonIcon>
  );
}

export default DartModeToggle;
