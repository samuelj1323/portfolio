import type { Route } from "$utils/types";
import { routeMappings } from "$utils/constants";
import { useNavigate } from "react-router";

type NavItemProps = {
  route: Route;
};

const NavItem = ({ route }: NavItemProps) => {
  const nav = useNavigate();
  const name = routeMappings[route];
  const handleNavigation = () => {
    nav(route);
  };
  return (
    <span>
      <a onClick={handleNavigation} href={route}>
        {name}
      </a>
    </span>
  );
};

export default NavItem;
