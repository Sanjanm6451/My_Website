import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Check system preference on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    
    if (storedTheme) {
      setTheme(storedTheme);
      setIsDarkMode(
        storedTheme === "dark" || 
        (storedTheme === "system" && prefersDark)
      );
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Update document when theme changes
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Determine if dark mode should be applied
    const shouldApplyDark = 
      theme === "dark" || 
      (theme === "system" && prefersDark);
    
    // Update state
    setIsDarkMode(shouldApplyDark);
    
    // Update document class
    if (shouldApplyDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Store preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (theme === "system") {
        setIsDarkMode(mediaQuery.matches);
        if (mediaQuery.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "light";
      
      // If system, toggle based on current state
      return isDarkMode ? "light" : "dark";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
