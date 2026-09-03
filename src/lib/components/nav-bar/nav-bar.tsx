import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { routes } from "$utils/constants";
import NavItem from "$components/nav-item";
import styles from "./navBar.module.css";

const NavBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [showName, setShowName] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setShowName(true);
      return;
    }
    const onScroll = () => setShowName(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <div className={styles.nav}>
      <span className={`${styles.title} ${showName ? styles.visible : styles.hidden}`}>
        <h1>Samuel Mahan</h1>
      </span>
      <span className={styles.routes}>
        {routes.map((route) => (
          <NavItem key={route} route={route} />
        ))}
      </span>
    </div>
  );
};

export default NavBar;
