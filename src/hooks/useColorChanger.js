import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useColorChanger = (background) => {
  const [scrollState, setScrollState] = useState(0);

  const location = useLocation();

  let backgroundStyle = {
    current: { background: "black" },
    after: { background: background },
  };

  if (!JSON.parse(localStorage.getItem("login"))) {
    backgroundStyle["current"].background = "transparent";
    backgroundStyle["after"].background = "black";
  }
  if (JSON.parse(localStorage.getItem("login"))) {
    backgroundStyle["current"].background = "transparent";
    backgroundStyle["after"].background = background;
  }

  if (location.pathname.trim() === "/" && JSON.parse(localStorage.getItem("login"))) {
    backgroundStyle["current"].background = "transparent";
    backgroundStyle["after"].background = "var(--color-blue2)";
  }

  if (
    location.pathname.trim() === "/search" ||
    location.pathname.trim() === "/collection/library"
  ) {
    backgroundStyle["current"].background = "transparent";
    backgroundStyle["after"].background = "black";
  }

  useEffect(() => {
    const scrollHandler = () => {
      let scroll = window.pageYOffset;
      setScrollState(scroll);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return {
    scrollState,
    backgroundStyle,
  };
};

export default useColorChanger;
