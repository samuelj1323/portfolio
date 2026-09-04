import type { Route } from "$utils/types";
import { routeMappings } from "$utils/constants";
import { Link, useLocation } from "react-router";

type NavItemProps = {
  route: Route;
};

const NavItem = ({ route }: NavItemProps) => {
  const { pathname } = useLocation();
  const name = routeMappings[route];
  const isActive = pathname === route;
  return (
    <span>
      <Link to={route} aria-current={isActive ? "page" : undefined}>
        {name}
      </Link>
    </span>
  );
};

export default NavItem;
