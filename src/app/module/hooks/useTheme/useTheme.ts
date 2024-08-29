import { useEffect, useState } from "react";

export const useTheme = () => {
  const [currTheme, setTheme] = useState(
    localStorage.getItem("app-theme") || "dark",
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currTheme);
    localStorage.setItem("app-theme", currTheme);
  }, [currTheme]);
  return { currTheme, setTheme };
};
