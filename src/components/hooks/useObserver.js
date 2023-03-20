import React, { useEffect } from "react";
export const UseObserver = (ref, style) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      entry.target.classList.toggle(style, entry.isIntersecting);
    });
    observer.observe(ref.current);
  }, []);
};
