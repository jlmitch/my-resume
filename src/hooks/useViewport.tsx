import { useEffect, useState } from 'react';

export const useViewport = () => {
  const isBrowser = typeof window !== "undefined";

  if (!isBrowser) {
    // to fix the error: "window is not defined"
    // https://blog.greenroots.info/gatsby-the-window-is-not-defined-error-what-and-how-to-fix-it
    return { screenWidth: 0 };
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (!isBrowser) {
      setScreenWidth(0);
      return;
    }

    const handleWindowResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the screenWidth so we can use it in our components
  return { screenWidth };
};
