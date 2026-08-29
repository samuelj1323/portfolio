import type { Route } from "$utils/types";
import { routeMappings } from "$utils/constants";
import useTypedNavigate from "$hooks/useTypedNavigate";

type NavItemProps = {
  route: Route;
};

const NavItem = ({ route }: NavItemProps) => {
  const nav = useTypedNavigate();
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
