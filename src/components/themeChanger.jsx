import { useState, useEffect } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-8 h-8 flex items-center justify-center bg-transparent rounded-2xl ease-in transition-all duration-300 focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <RiMoonLine size={30} className="text-white" />
      ) : (
        <RiSunLine size={30} className="text-black" />
      )}
    </button>
  );
};

export default ThemeChanger;
