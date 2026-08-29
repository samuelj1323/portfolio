import { routes } from "$utils/constants";
import { useNavigate } from "react-router";
type NavItemProps = {
  name: string;
  route: typeof routes[number]
}

const NavItem = ({ name, route }: NavItemProps) => {
  const nav = useNavigate();
  const handleNavigation = () => {
    nav(route)
  }
  return (
    <span><a onClick={handleNavigation} href={route}>
      {name}
    </a></span>
)
};

export default NavItem;
