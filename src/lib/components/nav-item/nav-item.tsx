import type { Route } from "$utils/types";
import { routeMappings } from "$utils/constants";
import useTypedNavigate from "$hooks/useTypedNavigate";
import { useLocation } from "react-router";

type NavItemProps = {
  route: Route;
};

const NavItem = ({ route }: NavItemProps) => {
  const nav = useTypedNavigate();
  const { pathname } = useLocation();
  const name = routeMappings[route];
  const isActive = pathname === route;
  const handleNavigation = () => {
    nav(route);
  };
  return (
    <span>
      <a onClick={handleNavigation} href={route} aria-current={isActive ? "page" : undefined}>
        {name}
      </a>
    </span>
  );
};

export default NavItem;
