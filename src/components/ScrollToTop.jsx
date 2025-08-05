import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: use "auto" for instant jump
    });
  }, [pathname]);

  return null; // This component renders nothing
};

export default ScrollToTop;