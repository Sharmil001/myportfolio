import React, { useEffect, useRef, useState } from "react";

const AnimateEl = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting && setIsVisible(true);
      });
    });
    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);

  return (
    <div
      style={{ display: "inherit" }}
      className={`fade-in-section ${isVisible ? "visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default AnimateEl;
