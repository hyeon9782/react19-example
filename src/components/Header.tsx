import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { userData } = useContext(UserContext);
  return <div>{userData.name}</div>;
};

export default Header;
