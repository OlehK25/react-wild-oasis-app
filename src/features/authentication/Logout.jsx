import { RiLogoutBoxRLine } from "react-icons/ri";
import ButtonIcon from "../../ui/ButtonIcon.jsx";
import SpinnerMini from "../../ui/SpinnerMini.jsx";
import { useLogout } from "./useLogout.js";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <RiLogoutBoxRLine /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
