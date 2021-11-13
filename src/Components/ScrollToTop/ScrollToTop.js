import React from "react";
import { useEffect, useState } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
