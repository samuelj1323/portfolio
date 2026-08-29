import { routes } from "$utils/constants";
import NavItem from "$components/nav-item";

const NavBar = () => {
  return (
    <div id="nav-container">
      <span id="title">
        <h1>Samuel Mahan</h1>
      </span>
      <span id="routes">
        {routes.map((route) => (
          <NavItem key={route} route={route} />
        ))}
      </span>
    </div>
  );
};

export default NavBar;
