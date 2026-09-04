import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
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

  const [menuOpen, setMenuOpen] = useState(false);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const [theme, setTheme] = useState(() => {
    if (typeof document !== "undefined") return document.documentElement.getAttribute("data-theme") ?? "light";
    return "light";
  });

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <div className={styles.nav}>
      <span className={`${styles.title} ${showName ? styles.visible : styles.hidden}`}>
        <h1>Samuel Mahan</h1>
      </span>
      <span className={styles.routes}>
        {routes.map((route) => (
          <NavItem key={route} route={route} />
        ))}
        <button
          type="button"
          className={styles.toggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </span>

      <span className={styles.mobileActions}>
        <button
          type="button"
          className={styles.toggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </span>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {routes.map((route) => (
            <NavItem key={route} route={route} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
