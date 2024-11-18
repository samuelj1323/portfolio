import React, { useCallback, useMemo, useState, useEffect } from "react";
import HeaderBar from "./Components/HeaderBar";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Combined from "./Combined";
import zIndex from "@mui/material/styles/zIndex";

const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#3B3B3B",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
      z_layers: 2,
    }),
    []
  );

  return (
    <div className="particle-container">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        ></Particles>
      )}
      <Router basename="/">
        <ThemeProvider theme={theme}>
          <div style={{ zIndex: 10 }}>
            <HeaderBar />
            <Combined />
          </div>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
